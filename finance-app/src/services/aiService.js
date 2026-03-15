import API from "./api";

export const aiService = {
  predictBudget: (data) => API.post("/ai/budget", data),
  calculateScore: (data) => API.post("/ai/score", data),
  detectFraud: (data) => API.post("/ai/fraud", data),
  chat: (data) => API.post("/ai/chat", data),
  generateInsights: (data) => API.post("/ai/insights", data),
  taxAdvice: (data) => API.post("/ai/tax", data)
};