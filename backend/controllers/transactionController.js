import Transaction from "../models/Transaction.js";

export const addTransaction = async (req, res) => {
  try {
    const { type, amount, description } = req.body;

    const tx = await Transaction.create({
      userId: req.userId,
      type,
      amount,
      description,
    });

    res.json(tx);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const txs = await Transaction.find({ userId: req.userId }).sort({
      createdAt: -1,
    });

    res.json(txs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};