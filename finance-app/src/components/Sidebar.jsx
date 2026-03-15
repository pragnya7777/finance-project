import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Wallet,
  PieChart,
  TrendingUp,
  Calculator,
  Bell,
  Shield,
  Target,
  Brain,
  Sparkles,
  CreditCard,
  Bot,
  ChevronLeft,
  ChevronRight
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
    { path: '/investments', icon: TrendingUp, label: 'Investment Ideas', ai: true },
    { path: '/wallet', icon: Wallet, label: 'Wallet', ai: false },
    { path: '/budget', icon: PieChart, label: 'Budget Manager', ai: false },
    { path: '/bills', icon: Bell, label: 'Bill Reminders', ai: false },
    { path: '/fraud', icon: Shield, label: 'Fraud Detection', ai: true },
    { path: '/savings', icon: Target, label: 'Savings Goals', ai: false },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-white shadow-soft transition-all duration-300 z-10 ${isOpen ? 'w-64' : 'w-20'
        }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b">
          {isOpen ? (
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-primary-600">FinAI</h1>
              <span className="bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                AI-Powered
              </span>
            </div>
          ) : (
            <h1 className="text-xl font-bold text-primary-600">F</h1>
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
                    `sidebar-item ${isActive ? 'active' : ''} ${!isOpen ? 'justify-center' : ''
                    }`
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
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;