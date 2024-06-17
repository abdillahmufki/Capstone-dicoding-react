import { Sequelize } from "sequelize";

const db = new Sequelize("capstone_gempa", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
