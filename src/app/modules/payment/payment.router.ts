import { Router } from "express";
import { paymentController } from "./payment.controller";

const router = Router();

router.post("/create-payment-intent", paymentController.paymentIntent);

export const paymentRouter = router;