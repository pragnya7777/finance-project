import React from 'react';
import { Shield, TrendingUp, Award } from 'lucide-react';

const FinancialScore = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Financial Health Score</h1>
      <div className="card bg-gradient-to-r from-primary-600 to-purple-600 text-white">
        <div className="text-center p-8">
          <Shield size={48} className="mx-auto mb-4" />
          <div className="text-6xl font-bold mb-2">85</div>
          <p className="text-xl">Good Financial Health</p>
          <p className="text-sm opacity-75 mt-2">Above average • Top 30% of users</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <TrendingUp className="text-success mb-2" />
          <h3 className="font-semibold">Savings Rate</h3>
          <p className="text-2xl font-bold">24%</p>
        </div>
        <div className="card">
          <Award className="text-primary-600 mb-2" />
          <h3 className="font-semibold">Credit Utilization</h3>
          <p className="text-2xl font-bold">32%</p>
        </div>
        <div className="card">
          <Shield className="text-warning mb-2" />
          <h3 className="font-semibold">Emergency Fund</h3>
          <p className="text-2xl font-bold">3.5 months</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialScore;