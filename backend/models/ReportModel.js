// ReportModel.js
import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Report = db.define("Report", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
  },
  longitude: {
    type: DataTypes.FLOAT, // Adjusted to FLOAT for numeric values
    allowNull: false,
  },
  latitude: {
    type: DataTypes.FLOAT, // Adjusted to FLOAT for numeric values
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
  },
});

export default Report;
