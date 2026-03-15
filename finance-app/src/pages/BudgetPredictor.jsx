import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Calendar,
  DollarSign,
  Target,
  Shield,
  Zap,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { aiService } from '../services/aiService';
import LoadingSpinner from '../components/LoadingSpinner';

const BudgetPredictor = () => {
  const [loading, setLoading] = useState(false);
  const [income, setIncome] = useState(5000);
  const [savings, setSavings] = useState(1000);
  const [predictions, setPredictions] = useState(null);

  const categories = [
    { name: 'Housing', current: 1200, predicted: 1250, color: '#3b82f6' },
    { name: 'Food', current: 800, predicted: 850, color: '#10b981' },
    { name: 'Transport', current: 400, predicted: 420, color: '#f59e0b' },
    { name: 'Entertainment', current: 300, predicted: 280, color: '#ef4444' },
    { name: 'Shopping', current: 500, predicted: 480, color: '#8b5cf6' },
    { name: 'Utilities', current: 350, predicted: 360, color: '#ec4899' },
  ];

  const handlePredict = async () => {
    setLoading(true);
    // Simulate AI prediction
    setTimeout(() => {
      const totalCurrent = categories.reduce((sum, cat) => sum + cat.current, 0);
      const totalPredicted = categories.reduce((sum, cat) => sum + cat.predicted, 0);

      setPredictions({
        totalCurrent,
        totalPredicted,
        savingsPotential: totalCurrent - totalPredicted,
        confidence: 92,
        recommendations: [
          'Reduce entertainment by 10% to meet savings goals',
          'Consider meal prepping to optimize food budget',
          'Look for better insurance rates to reduce housing costs'
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">AI Budget Predictor</h1>

      {/* Input Section */}
      <div className="card">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Zap className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold">Enter Your Financial Details</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Income
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Savings
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="number"
                value={savings}
                onChange={(e) => setSavings(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handlePredict}
          disabled={loading}
          className="w-full bg-gradient-to-r from-primary-600 to-purple-600 text-white py-3 rounded-lg hover:from-primary-700 hover:to-purple-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              Analyzing with AI...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate AI Predictions
            </>
          )}
        </button>
      </div>

      {predictions && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="stat-card">
              <p className="stat-label">Current Monthly</p>
              <p className="stat-value">${predictions.totalCurrent.toLocaleString()}</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">AI Predicted</p>
              <p className="stat-value text-warning">${predictions.totalPredicted.toLocaleString()}</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Potential Savings</p>
              <p className="stat-value text-success">${predictions.savingsPotential.toLocaleString()}</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">AI Confidence</p>
              <p className="stat-value text-primary-600">{predictions.confidence}%</p>
            </div>
          </div>

          {/* Chart */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Current vs AI-Predicted Budget</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={categories}>
                <defs>
                  <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="current" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCurrent)" />
                <Area type="monotone" dataKey="predicted" stroke="#f59e0b" fillOpacity={1} fill="url(#colorPredicted)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Recommendations */}
          <div className="card bg-gradient-to-r from-primary-50 to-purple-50">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary-600" />
              AI Recommendations
            </h3>
            <ul className="space-y-3">
              {predictions.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  <span className="text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BudgetPredictor;