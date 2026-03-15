import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
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
  Zap,
  Brain,
  DollarSign,
  BarChart3,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Calendar,
  Download,
  RefreshCw,
  ChevronRight,
  Bot,
  User,
  Loader,
  MessageSquare,
  Plus,
  Send,
  QrCode,
  History,
  Edit2,
  Trash2,
  Bell,
  CheckCircle,
  Calculator,
  FileText,
  Eye,
  Lock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

// IMPORTANT: Add these Recharts imports
import {
  LineChart,
  Line,
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
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const Dashboard = () => {
  // Sample data (your existing data)
  const summaryData = [
    {
      title: 'Total Balance',
      value: '$45,678.90',
      change: '+12.5%',
      trend: 'up',
      icon: Wallet,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100'
    },
    {
      title: 'Monthly Expenses',
      value: '$3,245.67',
      change: '-8.2%',
      trend: 'down',
      icon: CreditCard,
      color: 'text-danger',
      bgColor: 'bg-red-100'
    },
    {
      title: 'Savings Progress',
      value: '$12,450',
      change: '+23.1%',
      trend: 'up',
      icon: PiggyBank,
      color: 'text-success',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Financial Health',
      value: '85',
      change: '+5 points',
      trend: 'up',
      icon: Shield,
      color: 'text-info',
      bgColor: 'bg-blue-100'
    }
  ];

  const expenseData = [
    { name: 'Housing', value: 1200, color: '#3b82f6' },
    { name: 'Food', value: 800, color: '#10b981' },
    { name: 'Transport', value: 400, color: '#f59e0b' },
    { name: 'Entertainment', value: 300, color: '#ef4444' },
    { name: 'Shopping', value: 545.67, color: '#8b5cf6' }
  ];

  const monthlyTrendData = [
    { month: 'Jan', expenses: 2800, income: 4200, savings: 1400 },
    { month: 'Feb', expenses: 2950, income: 4200, savings: 1250 },
    { month: 'Mar', expenses: 3100, income: 4500, savings: 1400 },
    { month: 'Apr', expenses: 2900, income: 4500, savings: 1600 },
    { month: 'May', expenses: 3245, income: 4800, savings: 1555 },
    { month: 'Jun', expenses: 3050, income: 4800, savings: 1750 }
  ];

  const budgetComparisonData = [
    { category: 'Housing', budget: 1300, actual: 1200 },
    { category: 'Food', budget: 700, actual: 800 },
    { category: 'Transport', budget: 350, actual: 400 },
    { category: 'Entertainment', budget: 250, actual: 300 },
    { category: 'Shopping', budget: 500, actual: 545 }
  ];

  const aiInsights = [
    {
      title: 'Reduce Dining Out',
      description: 'You spent 15% more on restaurants this month. Consider cooking at home to save $120.',
      impact: 'positive',
      savings: '$120'
    },
    {
      title: 'Subscription Alert',
      description: 'You have 3 unused subscriptions totaling $45/month. Cancel them to optimize expenses.',
      impact: 'warning',
      savings: '$45'
    },
    {
      title: 'Investment Opportunity',
      description: 'Based on your risk profile, consider diversifying into index funds for better returns.',
      impact: 'info',
      potential: '+8%'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Financial Dashboard</h1>
        <p className="text-gray-500">Welcome back, John! Here's your financial overview.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item, index) => (
          <div key={index} className="stat-card">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl ${item.bgColor}`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <div className={`flex items-center gap-1 text-sm ${item.trend === 'up' ? 'text-success' : 'text-danger'
                }`}>
                {item.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span>{item.change}</span>
              </div>
            </div>
            <div>
              <p className="stat-label">{item.title}</p>
              <p className="stat-value">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trend Chart */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Monthly Spending Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyTrendData}>
              <defs>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="expenses" stroke="#ef4444" fillOpacity={1} fill="url(#colorExpenses)" />
              <Area type="monotone" dataKey="income" stroke="#10b981" fillOpacity={1} fill="url(#colorIncome)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Expense Distribution Pie Chart */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Expense Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Budget vs Actual Bar Chart - Full Width */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Budget vs Actual Expenses</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={budgetComparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="budget" fill="#3b82f6" />
            <Bar dataKey="actual" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Smart Investment Insights */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Sparkles className="text-purple-500" />
          Smart Investment Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
            <TrendingUp className="text-primary-600 mb-2" />
            <h4 className="font-semibold">Tech Stocks Rally</h4>
            <p className="text-sm text-gray-600 mt-1">AI predicts 12% growth in tech sector this quarter</p>
            <button className="mt-2 text-primary-600 text-sm hover:underline">View Details →</button>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-100">
            <DollarSign className="text-success mb-2" />
            <h4 className="font-semibold">Dividend Opportunities</h4>
            <p className="text-sm text-gray-600 mt-1">Top 5 dividend stocks with 4-6% yield identified</p>
            <button className="mt-2 text-success text-sm hover:underline">Explore →</button>
          </div>
          <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-100">
            <Shield className="text-warning mb-2" />
            <h4 className="font-semibold">Risk Assessment</h4>
            <p className="text-sm text-gray-600 mt-1">Your portfolio risk is moderate. Consider diversifying</p>
            <button className="mt-2 text-warning text-sm hover:underline">Adjust →</button>
          </div>
        </div>
      </div>

      {/* AI Insights Section */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-primary-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold">AI-Powered Insights</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiInsights.map((insight, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2">{insight.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
              <div className={`text-sm font-medium ${insight.impact === 'positive' ? 'text-success' :
                insight.impact === 'warning' ? 'text-warning' : 'text-info'
                }`}>
                {insight.savings && `Potential Savings: ${insight.savings}`}
                {insight.potential && `Potential: ${insight.potential}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;