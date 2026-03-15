import express from "express";
import {
  addTransaction,
  getTransactions,
} from "../controllers/transactionController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.post("/add", authMiddleware, addTransaction);
router.get("/all", authMiddleware, getTransactions);

export default router;