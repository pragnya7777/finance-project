# budget_predictor.py
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class BudgetRequest(BaseModel):
    income: float
    expenses: dict  # {food: 300, rent: 900}

@router.post("/predict")
def predict_budget(data: BudgetRequest):
    total_expense = sum(data.expenses.values())
    savings = data.income - total_expense
    return {
        "total_expenses": total_expense,
        "savings": savings,
        "status": "good" if savings > 0 else "overspending"
    }