import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Clock, Eye, Lock } from 'lucide-react';

const FraudDetection = () => {
  const recentAlerts = [
    {
      id: 1,
      type: 'Suspicious Transaction',
      description: 'Unusual large transaction detected at electronics store',
      amount: '$1,245.67',
      date: '2024-01-15',
      status: 'investigating',
      severity: 'high'
    },
    {
      id: 2,
      type: 'New Device Login',
      description: 'Login from unrecognized device in New York',
      location: 'New York, USA',
      date: '2024-01-14',
      status: 'verified',
      severity: 'medium'
    },
    {
      id: 3,
      type: 'Password Change',
      description: 'Password was changed successfully',
      date: '2024-01-13',
      status: 'resolved',
      severity: 'low'
    }
  ];

  const securityScore = 85;
  const activeSessions = 3;
  const lastScan = '2024-01-15 14:30';

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Fraud Detection & Security</h1>

      {/* Security Score Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={24} />
            <h3 className="text-lg font-semibold">Security Score</h3>
          </div>
          <div className="text-4xl font-bold mb-2">{securityScore}</div>
          <p className="text-primary-100">Good - Your account is well protected</p>
        </div>

        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-5 h-5 text-primary-600" />
            <p className="stat-label">Active Sessions</p>
          </div>
          <p className="stat-value">{activeSessions}</p>
          <p className="text-sm text-gray-500">2 unrecognized devices</p>
        </div>

        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-primary-600" />
            <p className="stat-label">Last Security Scan</p>
          </div>
          <p className="stat-value">{lastScan}</p>
          <p className="text-sm text-success">No threats found</p>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Recent Security Alerts</h3>
        <div className="space-y-4">
          {recentAlerts.map((alert) => (
            <div key={alert.id} className="p-4 border rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${alert.severity === 'high' ? 'bg-red-100' :
                    alert.severity === 'medium' ? 'bg-yellow-100' : 'bg-blue-100'
                    }`}>
                    {alert.severity === 'high' ? (
                      <AlertTriangle className="w-4 h-4 text-danger" />
                    ) : alert.severity === 'medium' ? (
                      <AlertTriangle className="w-4 h-4 text-warning" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-success" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold">{alert.type}</h4>
                    <p className="text-sm text-gray-600">{alert.description}</p>
                    {alert.amount && (
                      <p className="text-sm font-medium text-danger mt-1">{alert.amount}</p>
                    )}
                    {alert.location && (
                      <p className="text-sm text-gray-500 mt-1">{alert.location}</p>
                    )}
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${alert.status === 'investigating' ? 'bg-yellow-100 text-warning' :
                  alert.status === 'verified' ? 'bg-blue-100 text-info' :
                    'bg-green-100 text-success'
                  }`}>
                  {alert.status}
                </span>
              </div>
              <div className="text-xs text-gray-400 mt-2">
                {new Date(alert.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Recommendations */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Security Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-primary-600" />
              <h4 className="font-medium">Enable Two-Factor Authentication</h4>
            </div>
            <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
            <button className="mt-2 text-primary-600 text-sm hover:underline">Enable Now</button>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-primary-600" />
              <h4 className="font-medium">Review Connected Apps</h4>
            </div>
            <p className="text-sm text-gray-600">3 apps have access to your account</p>
            <button className="mt-2 text-primary-600 text-sm hover:underline">Review Access</button>
          </div>
        </div>
      </div>

      {/* Transaction Monitoring */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Transaction Monitoring</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>International transactions monitored</span>
            </div>
            <span className="text-sm text-success">Active</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Large transaction alerts ($1,000)</span>
            </div>
            <span className="text-sm text-success">Active</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Unusual location detection</span>
            </div>
            <span className="text-sm text-success">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudDetection;