import { Router } from "express";
import { paymentController } from "./payment.controller";

const router = Router();

router.post("/create-payment-intent", paymentController.paymentIntent);
router.get("/success", paymentController.success);
router.get("/failure", paymentController.failure);


export const paymentRouter = router;