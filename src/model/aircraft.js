import db from "../../db.js";
import { DataTypes } from "sequelize";

const Aircraft = db.define(
  "Aircraft",
  {
    aircraft_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "aircraft",
    timestamps: false,
  }
);

export default Aircraft;
