import React, { useState } from 'react';
import { Bell, Calendar, CheckCircle, AlertCircle, Plus, Clock } from 'lucide-react';

const BillReminder = () => {
  const [bills, setBills] = useState([
    { id: 1, name: 'Electricity Bill', amount: 145.67, dueDate: '2024-01-25', status: 'upcoming', category: 'Utilities' },
    { id: 2, name: 'Rent', amount: 1200, dueDate: '2024-02-01', status: 'upcoming', category: 'Housing' },
    { id: 3, name: 'Internet', amount: 79.99, dueDate: '2024-01-20', status: 'paid', category: 'Utilities' },
    { id: 4, name: 'Credit Card', amount: 450, dueDate: '2024-01-28', status: 'upcoming', category: 'Credit' },
    { id: 5, name: 'Netflix', amount: 15.99, dueDate: '2024-01-15', status: 'overdue', category: 'Subscription' },
  ]);

  const totalUpcoming = bills.filter(b => b.status === 'upcoming').reduce((sum, b) => sum + b.amount, 0);
  const totalOverdue = bills.filter(b => b.status === 'overdue').reduce((sum, b) => sum + b.amount, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Bill Reminders</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat-card">
          <p className="stat-label">Total Bills</p>
          <p className="stat-value">${bills.reduce((sum, b) => sum + b.amount, 0).toFixed(2)}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Upcoming</p>
          <p className="stat-value text-warning">${totalUpcoming.toFixed(2)}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Overdue</p>
          <p className="stat-value text-danger">${totalOverdue.toFixed(2)}</p>
        </div>
      </div>

      {/* Add Bill Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
          <Plus size={18} />
          <span>Add Bill Reminder</span>
        </button>
      </div>

      {/* Bills List */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Your Bills</h3>
        <div className="space-y-4">
          {bills.map((bill) => (
            <div key={bill.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-medium transition">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bill.status === 'paid' ? 'bg-green-100' :
                    bill.status === 'overdue' ? 'bg-red-100' : 'bg-yellow-100'
                  }`}>
                  {bill.status === 'paid' ? (
                    <CheckCircle className="w-5 h-5 text-success" />
                  ) : bill.status === 'overdue' ? (
                    <AlertCircle className="w-5 h-5 text-danger" />
                  ) : (
                    <Clock className="w-5 h-5 text-warning" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold">{bill.name}</h4>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-gray-500">{bill.category}</span>
                    <span className="text-sm text-gray-500">Due: {new Date(bill.dueDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">${bill.amount.toFixed(2)}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${bill.status === 'paid' ? 'bg-green-100 text-success' :
                    bill.status === 'overdue' ? 'bg-red-100 text-danger' :
                      'bg-yellow-100 text-warning'
                  }`}>
                  {bill.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar View (Simplified) */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-primary-600" />
          <h3 className="text-lg font-semibold">Upcoming Bills Calendar</h3>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
          {[...Array(31)].map((_, i) => {
            const day = i + 1;
            const billsOnDay = bills.filter(b =>
              new Date(b.dueDate).getDate() === day &&
              b.status !== 'paid'
            );

            return (
              <div key={i} className={`text-center p-2 rounded-lg ${billsOnDay.length > 0 ? 'bg-primary-50 text-primary-700 font-medium' : ''
                }`}>
                <div>{day}</div>
                {billsOnDay.length > 0 && (
                  <div className="text-xs text-primary-600">
                    {billsOnDay.length} bill{billsOnDay.length > 1 ? 's' : ''}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="w-5 h-5 text-primary-600" />
          <h3 className="text-lg font-semibold">Reminder Settings</h3>
        </div>
        <div className="space-y-3">
          <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span>Email Reminders</span>
            <input type="checkbox" className="rounded text-primary-600" defaultChecked />
          </label>
          <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span>Push Notifications</span>
            <input type="checkbox" className="rounded text-primary-600" defaultChecked />
          </label>
          <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span>Remind me 3 days before due date</span>
            <input type="checkbox" className="rounded text-primary-600" defaultChecked />
          </label>
        </div>
      </div>
    </div>
  );
};

export default BillReminder;