import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  TrendingUp,
  TrendingDown,
  Wallet,
  CreditCard,
  PiggyBank,
  Shield,
  Sparkles,
  AlertCircle,
  Clock,
  Target,
  Award,
  Zap
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { aiService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [insights, setInsights] = useState(null);
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [selectedInsight, setSelectedInsight] = useState(null);

  useEffect(() => {
    fetchAIData();
  }, []);

  const fetchAIData = async () => {
    setLoading(true);
    try {
      // Simulate API calls - replace with actual AI service calls
      const mockInsights = {
        summary: {
          totalBalance: 45678.90,
          monthlyExpenses: 3245.67,
          savingsProgress: 12450,
          financialHealth: 85,
          aiConfidence: 94
        },
        predictions: {
          nextMonthExpenses: 3400,
          savingsPotential: 520,
          riskLevel: 'low',
          recommendedBudget: 3100
        },
        trends: [
          { month: 'Jan', actual: 2800, predicted: 2900, aiAdjusted: 2750 },
          { month: 'Feb', actual: 2950, predicted: 3000, aiAdjusted: 2900 },
          { month: 'Mar', actual: 3100, predicted: 3150, aiAdjusted: 3050 },
          { month: 'Apr', actual: 2900, predicted: 2950, aiAdjusted: 2850 },
          { month: 'May', actual: 3245, predicted: 3300, aiAdjusted: 3200 },
          { month: 'Jun', actual: 3050, predicted: 3100, aiAdjusted: 3000 },
        ]
      };

      const mockSuggestions = [
        {
          id: 1,
          type: 'savings',
          title: 'Optimize Restaurant Spending',
          description: 'AI detected 15% overspend on dining. Based on your patterns, switching to cooking at home could save $180/month.',
          impact: '+$2,160/year',
          confidence: 94,
          action: 'View detailed breakdown',
          icon: TrendingUp
        },
        {
          id: 2,
          type: 'investment',
          title: 'Smart Investment Opportunity',
          description: 'Your risk profile suggests diversifying into AI-recommended index funds. Projected return: 8-12% annually.',
          impact: '+$3,800 potential',
          confidence: 87,
          action: 'Explore options',
          icon: Target
        },
        {
          id: 3,
          type: 'alert',
          title: 'Unusual Subscription Activity',
          description: 'Found 3 unused subscriptions totaling $47/month. AI recommends cancellation.',
          impact: 'Save $564/year',
          confidence: 99,
          action: 'Review subscriptions',
          icon: AlertCircle
        },
        {
          id: 4,
          type: 'tax',
          title: 'Tax Optimization Opportunity',
          description: 'Based on your spending, you may qualify for $2,300 in additional deductions.',
          impact: 'Potential refund: +$690',
          confidence: 82,
          action: 'Analyze deductions',
          icon: Calculator
        }
      ];

      setInsights(mockInsights);
      setAiSuggestions(mockSuggestions);
    } catch (error) {
      console.error('Error fetching AI data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" text="AI is analyzing your finances..." />
      </div>
    );
  }

  const summaryCards = [
    {
      title: 'Total Balance',
      value: `$${insights?.summary.totalBalance.toLocaleString()}`,
      change: '+12.5%',
      trend: 'up',
      icon: Wallet,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
      aiInsight: 'Optimal allocation'
    },
    {
      title: 'Monthly Expenses',
      value: `$${insights?.summary.monthlyExpenses.toLocaleString()}`,
      change: '-8.2%',
      trend: 'down',
      icon: CreditCard,
      color: 'text-danger',
      bgColor: 'bg-red-100',
      aiInsight: 'Below prediction'
    },
    {
      title: 'Savings Progress',
      value: `$${insights?.summary.savingsProgress.toLocaleString()}`,
      change: '+23.1%',
      trend: 'up',
      icon: PiggyBank,
      color: 'text-success',
      bgColor: 'bg-green-100',
      aiInsight: 'On track'
    },
    {
      title: 'Financial Health',
      value: insights?.summary.financialHealth,
      suffix: '/100',
      change: '+5 points',
      trend: 'up',
      icon: Shield,
      color: 'text-info',
      bgColor: 'bg-blue-100',
      aiInsight: `${insights?.summary.aiConfidence}% confidence`
    }
  ];

  return (
    <div className="space-y-6">
      {/* AI Status Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 rounded-xl p-4 text-white"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Brain size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold">AI Financial Assistant Active</h2>
              <p className="text-sm opacity-90">Analyzing 2,847 transactions • 94% prediction accuracy</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm">Live Analysis</span>
          </div>
        </div>
      </motion.div>

      {/* Summary Cards with AI Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="stat-card relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform"></div>
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl ${item.bgColor}`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <div className={`flex items-center gap-1 text-sm ${item.trend === 'up' ? 'text-success' : 'text-danger'
                }`}>
                {item.change}
              </div>
            </div>
            <div className="mt-2">
              <p className="stat-label">{item.title}</p>
              <div className="flex items-baseline gap-1">
                <p className="stat-value">{item.value}</p>
                {item.suffix && <span className="text-gray-400">{item.suffix}</span>}
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs">
                <Sparkles size={12} className="text-purple-500" />
                <span className="text-purple-600">{item.aiInsight}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Prediction Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold">AI-Powered Predictions vs Actual</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-green-100 text-success px-2 py-1 rounded-full">
              Accuracy: 94%
            </span>
            <span className="text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded-full">
              AI Adjusted
            </span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={insights?.trends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="actual" stroke="#ef4444" name="Actual" strokeWidth={2} />
            <Line type="monotone" dataKey="predicted" stroke="#f59e0b" name="Traditional Prediction" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="aiAdjusted" stroke="#3b82f6" name="AI Enhanced" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* AI Smart Suggestions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-500" />
            AI-Powered Smart Suggestions
          </h3>
          <button className="text-sm text-primary-600 hover:underline">Refresh Insights</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence>
            {aiSuggestions.map((suggestion, index) => (
              <motion.div
                key={suggestion.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg border-l-4 cursor-pointer transition-all hover:shadow-medium ${suggestion.type === 'savings' ? 'border-l-success bg-green-50' :
                  suggestion.type === 'investment' ? 'border-l-primary bg-blue-50' :
                    suggestion.type === 'alert' ? 'border-l-warning bg-yellow-50' :
                      'border-l-info bg-purple-50'
                  }`}
                onClick={() => setSelectedInsight(suggestion)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${suggestion.type === 'savings' ? 'bg-green-200' :
                      suggestion.type === 'investment' ? 'bg-blue-200' :
                        suggestion.type === 'alert' ? 'bg-yellow-200' :
                          'bg-purple-200'
                      }`}>
                      <suggestion.icon className={`w-5 h-5 ${suggestion.type === 'savings' ? 'text-success' :
                        suggestion.type === 'investment' ? 'text-primary-600' :
                          suggestion.type === 'alert' ? 'text-warning' :
                            'text-purple-600'
                        }`} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{suggestion.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{suggestion.description}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-sm font-medium text-success">{suggestion.impact}</span>
                        <span className="text-xs bg-white px-2 py-1 rounded-full">
                          {suggestion.confidence}% confidence
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mt-3 text-sm text-primary-600 hover:underline flex items-center gap-1">
                  {suggestion.action}
                  <span>→</span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* AI Insights Modal */}
      <AnimatePresence>
        {selectedInsight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setSelectedInsight(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl p-6 max-w-md w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">AI Insight Details</h3>
                <button onClick={() => setSelectedInsight(null)}>✕</button>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold">{selectedInsight.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{selectedInsight.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">AI Confidence</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-primary-600 rounded-full"
                        style={{ width: `${selectedInsight.confidence}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{selectedInsight.confidence}%</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700">
                    Apply Suggestion
                  </button>
                  <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;