import express from "express";
const router = express.Router();

import userRoutes from "./userRoutes.js";
import aircraftRoutes from "./aircraftRoutes.js";
import passengerRoutes from "./passengerRoutes.js";
import flightRoutes from "./flightRoutes.js";
import boardingPassRoutes from "./boardingPassRoutes.js";

// Agrupando todas as rotas sob /api
router.use("/api", userRoutes);
router.use("/api", aircraftRoutes);
router.use("/api", passengerRoutes);
router.use("/api", flightRoutes);
router.use("/api", boardingPassRoutes);

export default router;
