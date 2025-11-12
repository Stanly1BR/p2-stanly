import express from "express";
const router = express.Router();
import PassengerController from "../controller/passengerController.js";
import authMiddleware from "../middlewares/auth.js";

router.get("/passengers", authMiddleware, PassengerController.getAllPassengers);
router.get(
  "/passengers/:id",
  authMiddleware,
  PassengerController.getPassengerById
);

export default router;
