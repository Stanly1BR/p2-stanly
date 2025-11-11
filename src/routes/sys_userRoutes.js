import express from "express";
import UserController from "../controller/sys_userController.js";
import authMiddleware from "../middlewares/auth.js";
import { body } from "express-validator";

const router = express.Router();

const loginValidations = [
  body("login_email").isEmail().withMessage("Email inválido no login"),
  body("password").notEmpty().withMessage("Senha obrigatória no login"),
];

const userCreationValidations = [
  body("name").trim().notEmpty().withMessage("Nome é obrigatório"),
  body("login_email").isEmail().withMessage("Email inválido"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Senha deve ter no mínimo 5 caracteres"),
  body("user_type")
    .isIn(["admin", "user"])
    .withMessage('Tipo de usuário inválido. Deve ser "admin" ou "user"'),
];

//Rotas Publicas
router.post("/login", loginValidations, UserController.login);
router.post("/users", userCreationValidations, UserController.createUser);

//Rotas Privadas
router.get("/users", authMiddleware, UserController.getAllUsers);
router.get("/users/:id", authMiddleware, UserController.getUserById);
router.put("/users/:id", authMiddleware, UserController.updateUser);
router.delete("/users/:id", authMiddleware, UserController.deleteUser);

export default router;
