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
    type: DataTypes.STRING,
    defaultValue: "0.0", // Example default value
    allowNull: false,
  },
  latitude: {
    type: DataTypes.STRING,
    defaultValue: "0.0", // Example default value
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
  },
  strength: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "sedang", // Example default value
  },
  address: {
    type: DataTypes.STRING, // Adjust data type according to your needs (e.g., DataTypes.TEXT)
    allowNull: false,
  },
});

export default Report;
