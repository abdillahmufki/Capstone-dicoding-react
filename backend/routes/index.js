import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
} from "../controllers/UsersController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshTokenController.js";
import { createReport, getReports } from "../controllers/ReportController.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

// Rute laporan gempa
router.post("/reports", verifyToken, createReport);
router.get("/reports", getReports);

export default router;
