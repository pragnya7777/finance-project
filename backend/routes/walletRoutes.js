import express from "express";
import { getBalance, addMoney } from "../controllers/walletController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.get("/balance", authMiddleware, getBalance);
router.post("/add", authMiddleware, addMoney);

export default router;