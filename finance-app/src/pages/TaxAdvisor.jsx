import React, { useState } from 'react';
import { Calculator, FileText, TrendingDown } from 'lucide-react';

const TaxAdvisor = () => {
  const [income, setIncome] = useState(75000);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">AI Tax Advisor</h1>
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="text-primary-600" />
          <h2 className="text-xl font-semibold">Tax Calculator</h2>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Annual Income</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">Estimated Tax:</p>
          <p className="text-3xl font-bold text-danger">
            ${Math.round(income * 0.22).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <TrendingDown className="text-success" />
          <h2 className="text-xl font-semibold">Tax Saving Tips</h2>
        </div>
        <ul className="space-y-2">
          <li className="p-2 bg-green-50 rounded">• Max out 401(k) contributions</li>
          <li className="p-2 bg-green-50 rounded">• Contribute to HSA</li>
          <li className="p-2 bg-green-50 rounded">• Claim charitable deductions</li>
        </ul>
      </div>
    </div>
  );
};

export default TaxAdvisor;