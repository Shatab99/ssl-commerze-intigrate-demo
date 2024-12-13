import { Router } from "express";
import { paymentRouter } from "../payment/payment.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/payment",
    route: paymentRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
