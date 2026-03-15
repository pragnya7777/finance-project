import express from "express";
import {
  predictBudget,
  getFinancialScore,
  detectFraud,
  aiChat,
  getInsights,
  adviseTax
} from "../controllers/aiController.js";

const router = express.Router();

// No auth middleware needed unless you want it
router.post("/budget", predictBudget);
router.post("/score", getFinancialScore);
router.post("/fraud", detectFraud);
router.post("/chat", aiChat);
router.post("/insights", getInsights);
router.post("/tax", adviseTax);

export default router;