import express from "express";
const router = express.Router();
import FlightController from "../controllers/flightController.js";
import authMiddleware from "../middlewares/auth.js";

router.get("/", authMiddleware, FlightController.getAllFlights);
router.get("/:id", authMiddleware, FlightController.getFlightById);

export default router;
