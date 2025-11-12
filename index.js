import express, { json } from "express";
import dotenv from "dotenv";
import routes from "./src/routes/index.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(routes);

const porta = process.env.PORT || 3010;
app.listen(porta);
