import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql", // Defina o dialeto do seu banco de dados
    port: process.env.DB_PORT || 3306,
    logging: false, // Defina como true para ver os comandos SQL no console

    // Configurações do Pool de Conexões (opcional, mas recomendado para produção)
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

async function testarConexao() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexão com o banco de dados estabelecida com sucesso.");
  } catch (error) {
    console.error(
      "❌ Não foi possível conectar ao banco de dados:",
      error.message
    );
    process.exit(1);
  }
}

testarConexao();

export default sequelize;
