from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

# Import your cleaned AI functions
from budget_predictor import predict_budget
from financial_score import calculate_financial_score
from finance_chatbot import chatbot_reply
from insight_generator import generate_insights
from tax_advisor import tax_advice
from transactions import detect_fraud

app = FastAPI()

# ---------------------------
# Pydantic Models for Requests
# ---------------------------

class BudgetRequest(BaseModel):
    income: float
    expenses: dict  # {"rent": 10000, "food": 3000}


class ScoreRequest(BaseModel):
    income: float
    expenses: float
    savings: float


class FraudRequest(BaseModel):
    transactions: list  # list of dicts


class ChatRequest(BaseModel):
    message: str


class TaxRequest(BaseModel):
    income: float
    deductions: float = 0


# ---------------------------
# ROUTES
# ---------------------------

@app.get("/")
def home():
    return {"message": "AI Service running successfully!"}


# Budget Prediction Endpoint
@app.post("/predict-budget")
def budget_api(req: BudgetRequest):
    result = predict_budget(req.income, req.expenses)
    return result


# Financial Score Endpoint
@app.post("/financial-score")
def score_api(req: ScoreRequest):
    result = calculate_financial_score(req.income, req.expenses, req.savings)
    return result


# Fraud Detection Endpoint
@app.post("/fraud-detect")
def fraud_api(req: FraudRequest):
    result = detect_fraud(req.transactions)
    return result


# Chatbot Endpoint
@app.post("/chatbot")
def chatbot_api(req: ChatRequest):
    response = chatbot_reply(req.message)
    return {"message": response}


# Insights Endpoint
@app.post("/generate-insights")
def insights_api(req: FraudRequest):
    result = generate_insights(req.transactions)
    return result


# Tax Advisor Endpoint
@app.post("/tax-advise")
def tax_api(req: TaxRequest):
    result = tax_advice(req.income, req.deductions)
    return result


# Run Server
if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)