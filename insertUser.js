import bcrypt from "bcrypt";
import db from "./db.js";
import User from "./src/model/sys_userMode.js";

async function insertUser() {
  try {
    // Sincronizar o banco de dados
    await db.sync();

    // Hash da senha
    const hashedPassword = await bcrypt.hash("12345", 10);

    // Criar usuário
    const user = await User.create({
      name: "Alice Johnson",
      login_email: "a@a.com",
      password: hashedPassword,
      user_type: "admin",
    });

    console.log("✅ Usuário inserido com sucesso!");
    console.log(user.toJSON());
    process.exit(0);
  } catch (err) {
    console.error("❌ Erro ao inserir usuário:", err);
    process.exit(1);
  }
}

insertUser();
