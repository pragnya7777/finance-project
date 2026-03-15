import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  Target,
  Calendar,
  Download,
  RefreshCw,
  Sparkles,
  ChevronRight,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';
import { aiService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

const AIInsights = () => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeframe, setTimeframe] = useState('month');

  useEffect(() => {
    fetchInsights();
  }, [timeframe]);

  const fetchInsights = async () => {
    setLoading(true);
    try {
      // Mock AI insights data
      const mockInsights = [
        {
          id: 1,
          category: 'spending',
          title: 'Spending Pattern Detected',
          description: 'Your weekend spending has increased by 23% compared to last month. AI suggests setting weekend budgets.',
          impact: 'High',
          confidence: 92,
          timestamp: '2024-01-15',
          icon: TrendingUp,
          color: 'text-warning',
          bgColor: 'bg-yellow-100',
          action: 'Set Weekend Budget'
        },
        {
          id: 2,
          category: 'savings',
          title: 'Optimized Savings Opportunity',
          description: 'Based on your income pattern, AI can auto-transfer $500 to savings on the 1st of every month.',
          impact: 'Medium',
          confidence: 88,
          timestamp: '2024-01-14',
          icon: Target,
          color: 'text-success',
          bgColor: 'bg-green-100',
          action: 'Enable Auto-Save'
        },
        {
          id: 3,
          category: 'investment',
          title: 'Smart Investment Recommendation',
          description: 'Your risk profile matches a balanced portfolio. Consider diversifying with 60% stocks, 30% bonds, 10% alternatives.',
          impact: 'High',
          confidence: 85,
          timestamp: '2024-01-13',
          icon: BarChart3,
          color: 'text-primary-600',
          bgColor: 'bg-primary-100',
          action: 'View Portfolio'
        },
        {
          id: 4,
          category: 'tax',
          title: 'Tax Saving Opportunity',
          description: 'You have $2,300 in potential deductions from charitable contributions and medical expenses.',
          impact: 'Medium',
          confidence: 79,
          timestamp: '2024-01-12',
          icon: PieChart,
          color: 'text-info',
          bgColor: 'bg-blue-100',
          action: 'Claim Deductions'
        },
        {
          id: 5,
          category: 'alert',
          title: 'Unusual Transaction Alert',
          description: 'Large transaction detected: $1,245 at Electronics Store. Verify if this was you.',
          impact: 'High',
          confidence: 96,
          timestamp: '2024-01-11',
          icon: AlertTriangle,
          color: 'text-danger',
          bgColor: 'bg-red-100',
          action: 'Verify Transaction'
        },
        {
          id: 6,
          category: 'budget',
          title: 'Budget Optimization',
          description: 'You consistently underspend in entertainment by $200. AI suggests reallocating to savings.',
          impact: 'Low',
          confidence: 91,
          timestamp: '2024-01-10',
          icon: LineChart,
          color: 'text-purple-600',
          bgColor: 'bg-purple-100',
          action: 'Adjust Budget'
        }
      ];

      // Filter by category
      const filtered = selectedCategory === 'all'
        ? mockInsights
        : mockInsights.filter(i => i.category === selectedCategory);

      setInsights(filtered);
    } catch (error) {
      console.error('Error fetching insights:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', name: 'All Insights', count: insights.length },
    { id: 'spending', name: 'Spending', count: insights.filter(i => i.category === 'spending').length },
    { id: 'savings', name: 'Savings', count: insights.filter(i => i.category === 'savings').length },
    { id: 'investment', name: 'Investment', count: insights.filter(i => i.category === 'investment').length },
    { id: 'tax', name: 'Tax', count: insights.filter(i => i.category === 'tax').length },
    { id: 'alert', name: 'Alerts', count: insights.filter(i => i.category === 'alert').length },
    { id: 'budget', name: 'Budget', count: insights.filter(i => i.category === 'budget').length },
  ];

  if (loading) {
    return <LoadingSpinner size="large" text="AI is generating insights..." />;
  }

  return (
    <div className="space-y-6">
      {/* Header with AI Status */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">AI-Powered Insights</h1>
          <p className="text-gray-500">Smart analysis of your financial patterns</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => fetchInsights()}
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
            <p className="stat-label">Active Insights</p>
          </div>
          <p className="stat-value">{insights.length}</p>
          <p className="text-xs text-success mt-1">+3 new today</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-success" />
            <p className="stat-label">Avg. Confidence</p>
          </div>
          <p className="stat-value">89%</p>
          <p className="text-xs text-gray-500 mt-1">High accuracy</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-warning" />
            <p className="stat-label">Potential Savings</p>
          </div>
          <p className="stat-value">$3,240</p>
          <p className="text-xs text-success mt-1">Identified this month</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-info" />
            <p className="stat-label">Last Analysis</p>
          </div>
          <p className="stat-value">2 min ago</p>
          <p className="text-xs text-gray-500 mt-1">Real-time updates</p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategory === cat.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {cat.name} ({cat.count})
          </button>
        ))}
      </div>

      {/* Timeframe Selector */}
      <div className="flex gap-2">
        {['week', 'month', 'quarter', 'year'].map((period) => (
          <button
            key={period}
            onClick={() => setTimeframe(period)}
            className={`px-3 py-1 rounded-lg text-sm ${timeframe === period
                ? 'bg-primary-100 text-primary-600 font-medium'
                : 'text-gray-500 hover:bg-gray-100'
              }`}
          >
            {period.charAt(0).toUpperCase() + period.slice(1)}
          </button>
        ))}
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map((insight) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card hover:shadow-medium transition cursor-pointer group"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${insight.bgColor}`}>
                <insight.icon className={`w-6 h-6 ${insight.color}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{insight.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{insight.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition group-hover:translate-x-1" />
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    <span className={`text-xs px-2 py-1 rounded-full ${insight.impact === 'High' ? 'bg-red-100 text-danger' :
                        insight.impact === 'Medium' ? 'bg-yellow-100 text-warning' :
                          'bg-green-100 text-success'
                      }`}>
                      {insight.impact} Impact
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs bg-blue-100 text-primary-600 px-2 py-1 rounded-full">
                      {insight.confidence}% confidence
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{insight.timestamp}</span>
                </div>

                <button className="mt-3 text-sm text-primary-600 hover:underline flex items-center gap-1">
                  {insight.action}
                  <span>→</span>
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