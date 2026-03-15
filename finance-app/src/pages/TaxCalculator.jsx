import React, { useState } from 'react';
import { Calculator, FileText, TrendingDown, AlertCircle } from 'lucide-react';

const TaxCalculator = () => {
  const [income, setIncome] = useState(75000);
  const [deductions, setDeductions] = useState(12500);

  // Simplified tax calculation (for demonstration)
  const calculateTax = () => {
    const taxableIncome = income - deductions;
    let tax = 0;

    if (taxableIncome <= 11000) {
      tax = taxableIncome * 0.10;
    } else if (taxableIncome <= 44725) {
      tax = 1100 + (taxableIncome - 11000) * 0.12;
    } else if (taxableIncome <= 95375) {
      tax = 5147 + (taxableIncome - 44725) * 0.22;
    } else {
      tax = 16290 + (taxableIncome - 95375) * 0.24;
    }

    return tax;
  };

  const tax = calculateTax();
  const effectiveRate = (tax / income * 100).toFixed(1);

  const deductionsList = [
    { name: 'Student Loan Interest', limit: '$2,500' },
    { name: 'Medical Expenses', limit: '7.5% of AGI' },
    { name: 'Charitable Donations', limit: '60% of AGI' },
    { name: 'Retirement Contributions', limit: '$6,500' },
    { name: 'Health Savings Account', limit: '$3,850' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Tax Optimizer</h1>

      {/* Calculator Card */}
      <div className="card">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-6 h-6 text-primary-600" />
          <h3 className="text-lg font-semibold">Tax Calculator</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Income
              </label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deductions
              </label>
              <input
                type="number"
                value={deductions}
                onChange={(e) => setDeductions(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Taxable Income</p>
                <p className="text-2xl font-bold">
                  ${(income - deductions).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Estimated Tax</p>
                <p className="text-2xl font-bold text-danger">
                  ${tax.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Effective Tax Rate</p>
                <p className="text-2xl font-bold text-primary-600">{effectiveRate}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tax Saving Tips */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <TrendingDown className="w-6 h-6 text-success" />
          <h3 className="text-lg font-semibold">Tax Saving Tips</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Maximize Retirement Contributions</h4>
            <p className="text-sm text-gray-600">
              Contribute to 401(k) or IRA to reduce taxable income. 401(k) limit: $22,500, IRA limit: $6,500.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Health Savings Account</h4>
            <p className="text-sm text-gray-600">
              HSA contributions are tax-deductible. 2024 limit: $4,150 for individuals, $8,300 for families.
            </p>
          </div>
        </div>
      </div>

      {/* Deductions Guide */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-6 h-6 text-primary-600" />
          <h3 className="text-lg font-semibold">Common Deductions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Deduction Type</th>
                <th className="text-left py-3">Maximum Limit</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {deductionsList.map((deduction, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-3">{deduction.name}</td>
                  <td className="py-3">{deduction.limit}</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-100 text-success text-xs rounded-full">
                      Available
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="card bg-yellow-50 border border-yellow-200">
        <div className="flex items-start gap-3">
          <AlertCircle size={20} className="text-warning flex-shrink-0" />
          <p className="text-sm text-yellow-800">
            This is a simplified tax calculator for estimation purposes only.
            Please consult with a tax professional for accurate tax advice based on your specific situation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;