import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import Chatbot from './components/Chatbot'; // floating chat button
import Dashboard from './pages/Dashboard';
import AIInsights from './pages/AIInsights';
import BudgetPredictor from './pages/BudgetPredictor';
import FinancialScore from './pages/FinancialScore';
import TaxAdvisor from './pages/TaxAdvisor';
import Transactions from './pages/Transactions';
import ChatbotPage from './pages/Chatbot'; // full chat page
import Wallet from './pages/Wallet';
import BudgetTracker from './pages/BudgetTracker';
import InvestmentIdeas from './pages/InvestmentIdeas';
import BillReminder from './pages/BillReminder';
import FraudDetection from './pages/FraudDetection';
import SavingsGoal from './pages/SavingsGoal';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Main content */}
        <main className={`flex-1 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
          <div className="p-8">
            <Routes>
              {/* Default redirect */}
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />

              {/* Public pages */}
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <PublicRoute>
                    <Signup />
                  </PublicRoute>
                }
              />

              {/* Protected pages */}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/budget-predictor"
                element={
                  <PrivateRoute>
                    <BudgetPredictor />
                  </PrivateRoute>
                }
              />
              <Route
                path="/wallet"
                element={
                  <PrivateRoute>
                    <Wallet />
                  </PrivateRoute>
                }
              />
              <Route
                path="/budget"
                element={
                  <PrivateRoute>
                    <BudgetTracker />
                  </PrivateRoute>
                }
              />

              {/* Other pages */}
              <Route path="/ai-insights" element={<AIInsights />} />
              <Route path="/financial-score" element={<FinancialScore />} />
              <Route path="/tax-advisor" element={<TaxAdvisor />} />
              <Route path="/chatbot" element={<ChatbotPage />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/investments" element={<InvestmentIdeas />} />
              <Route path="/bills" element={<BillReminder />} />
              <Route path="/fraud" element={<FraudDetection />} />
              <Route path="/savings" element={<SavingsGoal />} />
            </Routes>
          </div>
        </main>

        {/* Floating chatbot */}
        <Chatbot />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;