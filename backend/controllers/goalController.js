import Goal from "../models/Goal.js";

export const createGoal = async (req, res) => {
  try {
    const { title, targetAmount, deadline } = req.body;

    const goal = await Goal.create({
      userId: req.userId,
      title,
      targetAmount,
      deadline,
    });

    res.json(goal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.userId });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};