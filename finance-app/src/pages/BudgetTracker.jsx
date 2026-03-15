import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Plus, Edit2, Trash2, AlertCircle } from 'lucide-react';

const BudgetTracker = () => {
  const [budgets, setBudgets] = useState([
    { id: 1, category: 'Housing', allocated: 1300, spent: 1200, color: '#3b82f6' },
    { id: 2, category: 'Food', allocated: 700, spent: 800, color: '#10b981' },
    { id: 3, category: 'Transport', allocated: 350, spent: 400, color: '#f59e0b' },
    { id: 4, category: 'Entertainment', allocated: 250, spent: 300, color: '#ef4444' },
    { id: 5, category: 'Shopping', allocated: 500, spent: 545.67, color: '#8b5cf6' },
  ]);

  const totalBudget = budgets.reduce((sum, b) => sum + b.allocated, 0);
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const remaining = totalBudget - totalSpent;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Budget Manager</h1>

      {/* Budget Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat-card">
          <p className="stat-label">Total Budget</p>
          <p className="stat-value">${totalBudget.toFixed(2)}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Total Spent</p>
          <p className="stat-value text-danger">${totalSpent.toFixed(2)}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Remaining</p>
          <p className={`stat-value ${remaining >= 0 ? 'text-success' : 'text-danger'}`}>
            ${remaining.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Budget Chart and List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Budget Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={budgets}
                dataKey="allocated"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {budgets.map((entry) => (
                  <Cell key={entry.id} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Budget List */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Budget Categories</h3>
            <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
              <Plus size={18} />
              <span>Add Budget</span>
            </button>
          </div>
          <div className="space-y-4">
            {budgets.map((budget) => {
              const percentage = (budget.spent / budget.allocated) * 100;
              const isOverBudget = percentage > 100;

              return (
                <div key={budget.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: budget.color }} />
                      <span className="font-medium">{budget.category}</span>
                      {isOverBudget && (
                        <AlertCircle size={16} className="text-danger" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <Edit2 size={14} className="text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <Trash2 size={14} className="text-danger" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Spent: ${budget.spent.toFixed(2)}</span>
                      <span>Budget: ${budget.allocated.toFixed(2)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${isOverBudget ? 'bg-danger' : 'bg-success'
                          }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                    <div className="text-right text-sm">
                      <span className={isOverBudget ? 'text-danger' : 'text-success'}>
                        {percentage.toFixed(1)}% used
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Budget Tips */}
      <div className="card bg-primary-50 border border-primary-100">
        <h3 className="text-lg font-semibold text-primary-800 mb-2">Budgeting Tips</h3>
        <ul className="space-y-2 text-primary-700">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
            Follow the 50/30/20 rule: 50% needs, 30% wants, 20% savings
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
            Track your expenses daily to stay within budget
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
            Review and adjust your budget monthly based on spending patterns
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BudgetTracker;