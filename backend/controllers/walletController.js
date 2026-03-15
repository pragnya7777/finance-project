import Wallet from "../models/Wallet.js";

export const getBalance = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ userId: req.userId });
    if (!wallet) return res.json({ balance: 0 });

    res.json(wallet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addMoney = async (req, res) => {
  try {
    const { amount } = req.body;

    let wallet = await Wallet.findOne({ userId: req.userId });

    if (!wallet) {
      wallet = await Wallet.create({
        userId: req.userId,
        balance: amount,
      });
    } else {
      wallet.balance += amount;
      await wallet.save();
    }

    res.json(wallet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};