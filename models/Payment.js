import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  to_user: { type: String, required: true },
  oid: { type: String, required: true },
  message: { type: String },
  amount: { type: Number, required: true },
  done: { type: Boolean, default: false },
  paymentId: { type: String }
}, { timestamps: true });

export default mongoose.models.Payment ||
  mongoose.model("Payment", PaymentSchema);