import db from "../config/Database.js";
import { DataTypes } from "sequelize";

const Users = db.define("Users", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  refresh_token: {
    type: DataTypes.TEXT,
  },
});

export default Users;
