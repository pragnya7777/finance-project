import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Target,
  Calendar,
  Download,
  RefreshCw,
  Sparkles,
  ChevronRight,
  BarChart3,
  PieChart,
  LineChart,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';
import { aiService } from '../services/aiService';
import LoadingSpinner from '../components/LoadingSpinner';

const AIInsights = () => {

  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeframe, setTimeframe] = useState('month');

  useEffect(() => {
    fetchInsights();
  }, [timeframe, selectedCategory]);

  const fetchInsights = async () => {
    setLoading(true);
    try {
      // REAL backend call
      const res = await aiService.generateInsights({
        timeframe,
        transactions: []   // later replace with real user transactions
      });

      const aiInsights = res.data.insights || [];

      // Filter by user-selected category
      const filtered =
        selectedCategory === "all"
          ? aiInsights
          : aiInsights.filter(i => i.category === selectedCategory);

      setInsights(filtered);

    } catch (error) {
      console.error("Error fetching insights:", error);
    } finally {
      setLoading(false);
    }
  };

  // Category buttons
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'spending', name: 'Spending' },
    { id: 'savings', name: 'Savings' },
    { id: 'investment', name: 'Investment' },
    { id: 'tax', name: 'Tax' },
    { id: 'alert', name: 'Alerts' },
    { id: 'budget', name: 'Budget' }
  ];

  if (loading) {
    return <LoadingSpinner size="large" text="AI is generating insights..." />;
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">AI-Powered Insights</h1>
          <p className="text-gray-500">Smart analysis of your financial patterns</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchInsights}
            className="p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2"
          >
            <RefreshCw size={18} className="text-gray-600" />
            <span className="text-sm">Refresh</span>
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2">
            <Download size={18} className="text-gray-600" />
            <span className="text-sm">Export</span>
          </button>
        </div>
      </div>

      {/* AI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-primary-600" />
            <p className="stat-label">Insights Found</p>
          </div>
          <p className="stat-value">{insights.length}</p>
        </div>

        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-success" />
            <p className="stat-label">Avg. Confidence</p>
          </div>
          <p className="stat-value">89%</p>
        </div>

        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-warning" />
            <p className="stat-label">Potential Savings</p>
          </div>
          <p className="stat-value">$3,240</p>
        </div>

        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-info" />
            <p className="stat-label">Last Analysis</p>
          </div>
          <p className="stat-value">2 min ago</p>
        </div>

      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm transition ${selectedCategory === cat.id
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Timeframe Selector */}
      <div className="flex gap-2">
        {["week", "month", "quarter", "year"].map(period => (
          <button
            key={period}
            onClick={() => setTimeframe(period)}
            className={`px-3 py-1 rounded-lg text-sm ${timeframe === period
                ? "bg-primary-100 text-primary-600"
                : "text-gray-500 hover:bg-gray-100"
              }`}
          >
            {period[0].toUpperCase() + period.slice(1)}
          </button>
        ))}
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map(insight => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card hover:shadow-medium cursor-pointer transition group"
          >
            <div className="flex items-start gap-4">

              {/* Icon Box */}
              <div className={`p-3 rounded-xl ${insight.bgColor || "bg-blue-100"}`}>
                <insight.icon className={`w-6 h-6 ${insight.color || "text-blue-600"}`} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{insight.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {insight.description}
                    </p>
                  </div>

                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition" />
                </div>

                {/* Tags */}
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {insight.impact || "Medium"} Impact
                  </span>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    {insight.confidence || 80}% Confidence
                  </span>
                  <span className="text-xs text-gray-400">
                    {insight.timestamp || "2024-01-01"}
                  </span>
                </div>

                <button className="mt-3 text-sm text-primary-600 hover:underline flex items-center gap-1">
                  {insight.action || "View Details"} →
                </button>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default AIInsights;