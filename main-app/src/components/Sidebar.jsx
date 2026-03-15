import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Brain,
  TrendingUp,
  Target,
  Calculator,
  Bot,
  Shield,
  PieChart,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CreditCard
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', ai: false },
    { path: '/ai-insights', icon: Brain, label: 'AI Insights', ai: true, badge: 'Live' },
    { path: '/budget-predictor', icon: TrendingUp, label: 'Budget Predictor', ai: true },
    { path: '/financial-score', icon: Target, label: 'Financial Score', ai: true },
    { path: '/tax-advisor', icon: Calculator, label: 'Tax Advisor', ai: true },
    { path: '/chatbot', icon: Bot, label: 'AI Assistant', ai: true, badge: 'Chat' },
    { path: '/transactions', icon: CreditCard, label: 'Transactions', ai: false },
    { path: '/insights', icon: Sparkles, label: 'Smart Insights', ai: true },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-white shadow-soft transition-all duration-300 z-10 ${isOpen ? 'w-64' : 'w-20'
        }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo with AI badge */}
        <div className="flex items-center justify-between p-4 border-b">
          {isOpen ? (
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-primary-600">FinAI</h1>
              <span className="bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                AI-Powered
              </span>
            </div>
          ) : (
            <div className="relative">
              <h1 className="text-xl font-bold text-primary-600">F</h1>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 overflow-y-auto">
          <ul className="space-y-2 px-3">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-item relative ${isActive ? 'active' : ''} ${!isOpen ? 'justify-center' : ''
                    } ${item.ai ? 'ai-enabled' : ''}`
                  }
                >
                  <item.icon className={`sidebar-icon ${item.ai ? 'text-purple-500' : ''}`} />
                  {isOpen && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full animate-pulse">
                          {item.badge}
                        </span>
                      )}
                      {item.ai && !item.badge && (
                        <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* AI Status */}
        <div className="p-4 border-t">
          <div className={`flex items-center ${!isOpen ? 'justify-center' : 'gap-3'}`}>
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            {isOpen && (
              <div className="flex-1">
                <p className="text-sm font-medium">AI Assistant</p>
                <p className="text-xs text-green-500">Online & Ready</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;