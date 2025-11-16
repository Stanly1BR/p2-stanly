import db from "../../db.js";
import { DataTypes } from "sequelize";

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    login_email: {
      type: String,
      allowNull: false,
      unique: true,
    },
    password: {
      type: String,
      allowNull: false,
    },
    user_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "sys_user",
    timestamps: false,
  }
);

export default User;
