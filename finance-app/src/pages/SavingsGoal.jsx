import React, { useState } from 'react';
import { Target, Plus, TrendingUp, Calendar, Award } from 'lucide-react';

const SavingsGoal = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      name: 'Emergency Fund',
      target: 10000,
      current: 6500,
      deadline: '2024-12-31',
      category: 'Safety',
      color: 'bg-primary-600'
    },
    {
      id: 2,
      name: 'Vacation Fund',
      target: 5000,
      current: 2100,
      deadline: '2024-08-31',
      category: 'Travel',
      color: 'bg-success'
    },
    {
      id: 3,
      name: 'Down Payment',
      target: 50000,
      current: 12500,
      deadline: '2025-12-31',
      category: 'Housing',
      color: 'bg-warning'
    },
    {
      id: 4,
      name: 'New Car',
      target: 25000,
      current: 8750,
      deadline: '2024-06-30',
      category: 'Transportation',
      color: 'bg-info'
    }
  ]);

  const totalSaved = goals.reduce((sum, goal) => sum + goal.current, 0);
  const totalTarget = goals.reduce((sum, goal) => sum + goal.target, 0);
  const overallProgress = (totalSaved / totalTarget) * 100;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Savings Goals</h1>

      {/* Overall Progress */}
      <div className="card bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Target size={24} />
            <h3 className="text-lg font-semibold">Total Savings Progress</h3>
          </div>
          <span className="text-2xl font-bold">${totalSaved.toLocaleString()}</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress towards ${totalTarget.toLocaleString()}</span>
            <span>{overallProgress.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div
              className="bg-white h-3 rounded-full transition-all"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Add Goal Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
          <Plus size={18} />
          <span>New Savings Goal</span>
        </button>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          const daysLeft = Math.ceil((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));
          const monthlyNeeded = remaining / (daysLeft / 30);

          return (
            <div key={goal.id} className="card hover:shadow-medium transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{goal.name}</h3>
                  <p className="text-sm text-gray-500">{goal.category}</p>
                </div>
                <span className="px-3 py-1 bg-primary-100 text-primary-600 text-sm rounded-full">
                  {progress.toFixed(0)}%
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>${goal.current.toLocaleString()} saved</span>
                  <span className="text-gray-500">of ${goal.target.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${goal.color} h-2.5 rounded-full transition-all`}
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="text-xs text-gray-500">Remaining</p>
                    <p className="font-semibold text-danger">${remaining.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Days Left</p>
                    <p className="font-semibold">{daysLeft} days</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Monthly Needed</p>
                    <p className="font-semibold text-success">
                      ${monthlyNeeded > 0 ? monthlyNeeded.toFixed(0) : 0}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Deadline</p>
                    <p className="font-semibold">{new Date(goal.deadline).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Savings Tips */}
      <div className="card bg-primary-50 border border-primary-100">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-primary-600" />
          <h3 className="text-lg font-semibold text-primary-800">Savings Tips</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 bg-white rounded-lg">
            <h4 className="font-medium mb-1">50/30/20 Rule</h4>
            <p className="text-sm text-gray-600">Allocate 20% of your income to savings goals</p>
          </div>
          <div className="p-3 bg-white rounded-lg">
            <h4 className="font-medium mb-1">Automate Savings</h4>
            <p className="text-sm text-gray-600">Set up automatic transfers on payday</p>
          </div>
          <div className="p-3 bg-white rounded-lg">
            <h4 className="font-medium mb-1">Round-Up Savings</h4>
            <p className="text-sm text-gray-600">Save spare change from transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsGoal;