import express from "express";
import {
  createGoal,
  getGoals,
} from "../controllers/goalController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", authMiddleware, createGoal);
router.get("/all", authMiddleware, getGoals);

export default router;