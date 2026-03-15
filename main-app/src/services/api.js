import axios from 'axios';
import toast from 'react-hot-toast';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || 'An error occurred';
    toast.error(message);
    return Promise.reject(error);
  }
);

// AI Service endpoints
export const aiService = {
  // Get financial insights
  getInsights: (userId) => api.get(`/insights/${userId}`),

  // Predict budget
  predictBudget: (data) => api.post('/budget/predict', data),

  // Calculate financial score
  calculateScore: (data) => api.post('/score/calculate', data),

  // Get tax advice
  getTaxAdvice: (data) => api.post('/tax/advice', data),

  // Chat with AI
  sendChatMessage: (message) => api.post('/chat', { message }),

  // Get transaction analysis
  analyzeTransactions: (transactions) => api.post('/transactions/analyze', { transactions }),

  // Train model with new data
  trainModel: (data) => api.post('/model/train', data),
};

export default api;