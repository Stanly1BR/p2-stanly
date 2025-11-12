import db from "../../db.js";
import { DataTypes } from "sequelize";
import Flight from "./flight.js";
import Passenger from "./passenger.js";

const BoardingPass = db.define(
  "BoardingPass",
  {
    boarding_pass_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    passenger_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Passenger,
        key: "passenger_id",
      },
    },
    flight_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Flight,
        key: "flight_id",
      },
    },
    seat_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    boarding_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "boarding_pass",
    timestamps: false,
  }
);

BoardingPass.belongsTo(Passenger, { foreignKey: "passenger_id" });
BoardingPass.belongsTo(Flight, { foreignKey: "flight_id" });

export default BoardingPass;
