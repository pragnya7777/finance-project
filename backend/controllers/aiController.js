import axios from "axios";

// Base URL of the FastAPI service
const AI_URL = process.env.AI_SERVICE_URL || "http://127.0.0.1:8000";

// 1) Budget Prediction
export const predictBudget = async (req, res) => {
  try {
    const response = await axios.post(`${AI_URL}/predict-budget`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "AI service error", details: err.message });
  }
};

// 2) Financial Score
export const getFinancialScore = async (req, res) => {
  try {
    const response = await axios.post(`${AI_URL}/financial-score`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "AI service error" });
  }
};

// 3) Fraud Detection
export const detectFraud = async (req, res) => {
  try {
    const response = await axios.post(`${AI_URL}/fraud-detect`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "AI service error" });
  }
};

// 4) Chatbot
export const aiChat = async (req, res) => {
  try {
    const response = await axios.post(`${AI_URL}/chatbot`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "AI service error" });
  }
};

// 5) Insights
export const getInsights = async (req, res) => {
  try {
    const response = await axios.post(`${AI_URL}/generate-insights`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "AI service error" });
  }
};

// 6) Tax Advisor
export const adviseTax = async (req, res) => {
  try {
    const response = await axios.post(`${AI_URL}/tax-advise`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "AI service error" });
  }
};