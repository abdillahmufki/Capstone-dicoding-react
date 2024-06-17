// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

try {
  await db.authenticate();
  console.log("Connection to the database has been established successfully.");
} catch (err) {
  console.error("Unable to connect to the database:", err);
}

(async () => {
  await db.sync();
  console.log("Database Synced");
})();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
