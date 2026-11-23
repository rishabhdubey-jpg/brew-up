"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"


export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
    let user = await User.findOne({ username: to_username })

    const keyId = user?.razorpayid;
    const secret = user?.razorpaysecret;

    console.log("Razorpay Key ID exists:", !!keyId);
    console.log("Razorpay Secret exists:", !!secret);

    if (!keyId || !secret) {
        throw new Error("Razorpay credentials are missing from the user profile");
    }

    const instance = new Razorpay({
        key_id: keyId,
        key_secret: secret,
    });


    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    await Payment.create({ oid: x.id, amount: amount / 100, to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x

}


export const fetchuser = async (username) => {
    await connectDb()
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayments = async (username) => {
    await connectDb()
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()
    return p
}

export const updateProfile = async (data, oldusername) => {
    await connectDb()
    let ndata = Object.fromEntries(data)

    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }
        await User.updateOne({ email: ndata.email }, ndata)
        // Now update all the usernames in the Payments table 
        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })

    }
    else {


        await User.updateOne({ email: ndata.email }, ndata)
    }
}


export const fetchCreators = async () => {
    await connectDb();

    const creators = await User.find(
        { username: { $exists: true, $ne: "" } }
    )
    .select("username profilepic coverpic")
    .limit(100)
    .lean();

    return creators.map((creator) => ({
        ...creator,
        _id: creator._id.toString(),
    }));
};
