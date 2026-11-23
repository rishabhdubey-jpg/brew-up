
import { NextResponse } from "next/server";
import crypto from "crypto";
import connectDb from "@/db/connectDb";
import Payment from "@/models/Payment";
import User from "@/models/User";

export async function POST(request) {
  try {
    await connectDb();

    const formData = await request.formData();

    const razorpayPaymentId = formData.get("razorpay_payment_id");
    const razorpayOrderId = formData.get("razorpay_order_id");
    const razorpaySignature = formData.get("razorpay_signature");

    if (
      !razorpayPaymentId ||
      !razorpayOrderId ||
      !razorpaySignature
    ) {
      return NextResponse.json(
        { error: "Missing payment details" },
        { status: 400 }
      );
    }

    // Find the pending payment
    const payment = await Payment.findOne({
      oid: razorpayOrderId
    });

    if (!payment) {
      return NextResponse.json(
        { error: "Payment order not found" },
        { status: 404 }
      );
    }

    // Find the account that owns this Razorpay order
    const user = await User.findOne({
      username: payment.to_user
    });

    if (!user?.razorpaysecret) {
      return NextResponse.json(
        { error: "Razorpay secret not found" },
        { status: 500 }
      );
    }

    // Verify Razorpay signature
    const body =
      razorpayOrderId + "|" + razorpayPaymentId;

    const expectedSignature = crypto
      .createHmac("sha256", user.razorpaysecret)
      .update(body)
      .digest("hex");

    const expectedBuffer = Buffer.from(expectedSignature);
    const receivedBuffer = Buffer.from(razorpaySignature);

    if (
      expectedBuffer.length !== receivedBuffer.length ||
      !crypto.timingSafeEqual(expectedBuffer, receivedBuffer)
    ) {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    // Mark payment as completed only after verification
    await Payment.updateOne(
      {
        oid: razorpayOrderId,
        done: false
      },
      {
        $set: {
          done: true,
          paymentId: razorpayPaymentId
        }
      }
    );

    return NextResponse.redirect(
      new URL(
        `/${payment.to_user}?paymentdone=true`,
        process.env.NEXT_PUBLIC_URL
      ),
      303
    );

  } catch (error) {
    console.error("Razorpay verification error:", error);

    return NextResponse.json(
      { error: "Payment verification failed" },
      { status: 500 }
    );
  }
}
