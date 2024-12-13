import { Schema, model } from "mongoose";
import { IPaymentIntent } from "./payment.interface";

const paymentSchema = new Schema<IPaymentIntent>({
    amount: { type: Number, required: true },
    product_name: { type: String, required: true },
    product_profile: { type: String, required: true },
    product_image: { type: String, required: true },
    cus_name: { type: String, required: true },
    cus_email: { type: String, required: true },
});

export const Payment = model<IPaymentIntent>("Payment", paymentSchema);
