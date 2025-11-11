import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET não está definido nas variáveis de ambiente!");
    return res
      .status(500)
      .json({ message: "Erro de configuração do servidor" });
  }

  if (!token) return res.status(401).json({ message: "Token não fornecido" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token inválido" });
    req.user = user;
    next();
  });
}

export default authenticate;
