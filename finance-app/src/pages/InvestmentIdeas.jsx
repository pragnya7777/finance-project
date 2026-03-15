import React from 'react';
import { TrendingUp, TrendingDown, Shield, DollarSign, BarChart3, Sparkles, Target } from 'lucide-react';

const InvestmentIdeas = () => {
  const investments = [
    {
      id: 1,
      name: 'S&P 500 Index Fund',
      type: 'ETF',
      risk: 'Low',
      return: '10.5%',
      description: 'Diversified exposure to 500 largest US companies',
      color: 'text-primary-600',
      bgColor: 'bg-primary-100'
    },
    {
      id: 2,
      name: 'Tech Growth ETF',
      type: 'ETF',
      risk: 'Medium',
      return: '15.2%',
      description: 'Focus on high-growth technology companies',
      color: 'text-success',
      bgColor: 'bg-green-100'
    },
    {
      id: 3,
      name: 'Government Bonds',
      type: 'Bonds',
      risk: 'Low',
      return: '4.2%',
      description: 'Safe investment with guaranteed returns',
      color: 'text-info',
      bgColor: 'bg-blue-100'
    },
    {
      id: 4,
      name: 'Real Estate REIT',
      type: 'REIT',
      risk: 'Medium',
      return: '8.7%',
      description: 'Invest in commercial real estate properties',
      color: 'text-warning',
      bgColor: 'bg-yellow-100'
    },
    {
      id: 5,
      name: 'Dividend Aristocrats',
      type: 'Stocks',
      risk: 'Low',
      return: '7.8%',
      description: 'Companies with 25+ years of dividend growth',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      id: 6,
      name: 'International Markets',
      type: 'ETF',
      risk: 'Medium',
      return: '9.3%',
      description: 'Exposure to emerging and developed markets',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    }
  ];

  const recommendations = [
    {
      profile: 'Conservative',
      allocation: '40% Stocks, 50% Bonds, 10% Cash',
      return: '5-7%',
      risk: 'Low'
    },
    {
      profile: 'Moderate',
      allocation: '60% Stocks, 30% Bonds, 10% Alternatives',
      return: '8-10%',
      risk: 'Medium'
    },
    {
      profile: 'Aggressive',
      allocation: '80% Stocks, 10% Bonds, 10% Crypto',
      return: '12-15%',
      risk: 'High'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Investment Ideas</h1>
        <div className="flex items-center gap-2 bg-purple-100 px-3 py-1 rounded-full">
          <Sparkles size={16} className="text-purple-600" />
          <span className="text-sm text-purple-600">AI Powered</span>
        </div>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="stat-card">
          <p className="stat-label">S&P 500</p>
          <p className="stat-value">4,782.82</p>
          <span className="text-success text-sm flex items-center gap-1">
            <TrendingUp size={14} /> +0.8%
          </span>
        </div>
        <div className="stat-card">
          <p className="stat-label">NASDAQ</p>
          <p className="stat-value">15,055.65</p>
          <span className="text-success text-sm flex items-center gap-1">
            <TrendingUp size={14} /> +1.2%
          </span>
        </div>
        <div className="stat-card">
          <p className="stat-label">Bitcoin</p>
          <p className="stat-value">$43,567</p>
          <span className="text-success text-sm flex items-center gap-1">
            <TrendingUp size={14} /> +3.4%
          </span>
        </div>
        <div className="stat-card">
          <p className="stat-label">Gold</p>
          <p className="stat-value">$2,034</p>
          <span className="text-danger text-sm flex items-center gap-1">
            <TrendingDown size={14} /> -0.3%
          </span>
        </div>
      </div>

      {/* AI Recommendation Banner */}
      <div className="card bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 text-white">
        <div className="flex items-center gap-2 mb-4">
          <Target size={24} />
          <h2 className="text-xl font-bold">Your AI-Powered Portfolio</h2>
        </div>
        <p className="opacity-90 mb-4">Based on your risk profile and financial goals</p>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/20 rounded-lg p-3">
            <p className="text-2xl font-bold">60%</p>
            <p className="text-sm">Stocks</p>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <p className="text-2xl font-bold">30%</p>
            <p className="text-sm">Bonds</p>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <p className="text-2xl font-bold">10%</p>
            <p className="text-sm">Alternatives</p>
          </div>
        </div>
        <p className="text-sm mt-4 opacity-75">Expected annual return: 8-12%</p>
      </div>

      {/* Risk Profiles */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Investment Strategies by Risk Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => (
            <div key={index} className="card">
              <h4 className="font-semibold text-lg mb-2">{rec.profile}</h4>
              <p className="text-sm text-gray-600 mb-3">{rec.allocation}</p>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${rec.risk === 'Low' ? 'text-success' :
                  rec.risk === 'Medium' ? 'text-warning' : 'text-danger'
                  }`}>
                  {rec.risk} Risk
                </span>
                <span className="text-success font-medium">{rec.return}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Cards */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recommended Investments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {investments.map((inv) => (
            <div key={inv.id} className="card hover:shadow-medium transition cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${inv.bgColor}`}>
                  <BarChart3 className={`w-6 h-6 ${inv.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-lg">{inv.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${inv.risk === 'Low' ? 'bg-green-100 text-success' :
                      inv.risk === 'Medium' ? 'bg-yellow-100 text-warning' :
                        'bg-red-100 text-danger'
                      }`}>
                      {inv.risk} Risk
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{inv.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm text-gray-500">{inv.type}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-success">{inv.return}</span>
                      <TrendingUp size={16} className="text-success" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="card bg-yellow-50 border border-yellow-200">
        <div className="flex items-start gap-2">
          <Shield size={20} className="text-warning flex-shrink-0" />
          <p className="text-sm text-yellow-800">
            Investment involves risks. Past performance is not indicative of future results.
            These are AI-generated suggestions. Please consult with a financial advisor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentIdeas;