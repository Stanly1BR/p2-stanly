import express from "express";
const router = express.Router();
import BoardingPassController from "../controller/boardingPassController.js";
import authMiddleware from "../middlewares/auth.js";

//Rotas Publicas
router.get(
  "/boarding-passes",
  authMiddleware,
  BoardingPassController.getAllBoardingPasses
);
router.get(
  "/boarding-passes/:id",
  authMiddleware,
  BoardingPassController.getBoardingPassById
);

export default router;
