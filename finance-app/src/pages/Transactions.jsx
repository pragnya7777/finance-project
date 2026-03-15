import React from 'react';
import { CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Transactions = () => {
  const transactions = [
    { id: 1, desc: "Salary Deposit", amount: "+$4,800", type: "credit", date: "2024-03-15" },
    { id: 2, desc: "Rent Payment", amount: "-$1,200", type: "debit", date: "2024-03-12" },
    { id: 3, desc: "Grocery Store", amount: "-$156.32", type: "debit", date: "2024-03-10" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Transaction Analysis</h1>
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="text-primary-600" />
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
        </div>
        <div className="space-y-3">
          {transactions.map(t => (
            <div key={t.id} className="flex items-center justify-between p-3 border-b">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${t.type === 'credit' ? 'bg-green-100' : 'bg-red-100'}`}>
                  {t.type === 'credit' ? <ArrowUpRight className="text-success" /> : <ArrowDownRight className="text-danger" />}
                </div>
                <div>
                  <p className="font-medium">{t.desc}</p>
                  <p className="text-sm text-gray-500">{t.date}</p>
                </div>
              </div>
              <p className={`font-bold ${t.type === 'credit' ? 'text-success' : 'text-danger'}`}>{t.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;