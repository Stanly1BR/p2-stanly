import express from "express";
import UserController from "../controller/sys_userController.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

//Rotas Publicas
router.post("/login", UserController.login);
router.post("/users", UserController.createUser);

//Rotas Privadas
router.get("/users", authMiddleware, UserController.getAllUsers);
router.get("/users/:id", authMiddleware, UserController.getUserById);
router.put("/users/:id", authMiddleware, UserController.updateUser);
router.delete("/users/:id", authMiddleware, UserController.deleteUser);

export default router;
