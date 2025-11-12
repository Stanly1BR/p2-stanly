import express from "express";
const router = express.Router();
import AircraftController from "../controller/aircraftController.js";
import authMiddleware from "../middlewares/auth.js";

//Rotas Publicas
router.get("/aircrafts", authMiddleware, AircraftController.getAllAircrafts);
router.get(
  "/aircrafts/:id",
  authMiddleware,
  AircraftController.getAircraftById
);
router.get(
  "/aircrafts/model/:model",
  authMiddleware,
  AircraftController.getAircraftByModel
);
router.get(
  "/aircrafts/manufacturer/:manufacturer",
  authMiddleware,
  AircraftController.getAircraftByManufacturer
);

export default router;
