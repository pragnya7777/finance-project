import React, { useEffect, useState } from "react";
import { Wallet as WalletIcon, Plus, Send, QrCode, History, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { aiService } from "../services/aiService";

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  // Fetch wallet data from backend
  useEffect(() => {
    fetchBalance();
    fetchTransactions();
  }, []);

  // Load Balance
  const fetchBalance = async () => {
    try {
      const res = await API.get("/wallet/balance");
      setBalance(res.data.balance);
    } catch (err) {
      console.error("Balance fetch error:", err);
    }
  };

  // Load Transactions
  const fetchTransactions = async () => {
    try {
      const res = await API.get("/wallet/transactions");
      setTransactions(res.data.transactions);
    } catch (err) {
      console.error("Transactions fetch error:", err);
    }
  };

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold text-gray-800">Wallet</h1>

      {/* Balance Card */}
      <div className="card bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <WalletIcon size={24} />
            <span className="text-lg">Total Balance</span>
          </div>
          <span className="text-sm opacity-80">•••• 4582</span>
        </div>

        <div className="text-4xl font-bold mb-6">${balance}</div>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
            <Plus size={18} />
            <span>Add Money</span>
          </button>
          <button className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
            <Send size={18} />
            <span>Send</span>
          </button>
          <button className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
            <QrCode size={18} />
            <span>Scan</span>
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
          </div>
          <button className="text-primary-600 text-sm hover:underline">View All</button>
        </div>

        <div className="space-y-3">
          {transactions.length === 0 ? (
            <p className="text-gray-500 text-sm">No transactions found.</p>
          ) : (
            transactions.map((t) => (
              <div key={t._id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                    ${t.type === "credit" ? "bg-green-100" : "bg-red-100"}`}>
                    {t.type === "credit" ? (
                      <ArrowUpRight className="w-5 h-5 text-green-600" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{t.description}</p>
                    <p className="text-sm text-gray-500">{t.date}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className={`font-semibold ${t.type === "credit" ? "text-green-600" : "text-red-600"}`}>
                    {t.amount}
                  </p>
                  <p className="text-xs text-gray-500">{t.status}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
};

export default Wallet;