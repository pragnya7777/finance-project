def calculate_financial_score(income, expenses, savings):
    if income <= 0:
        return {"message": "Income seems invalid. Please enter a correct value."}

    expense_ratio = expenses / income
    savings_ratio = savings / income

    score = (savings_ratio * 0.7 + (1 - expense_ratio) * 0.3) * 100
    score = max(0, min(100, score))

    if score >= 80:
        msg = f"Excellent! Your financial score is {score:.2f}. You're managing money very well."
    elif score >= 60:
        msg = f"Good! Your financial score is {score:.2f}. Try increasing your savings for better stability."
    else:
        msg = f"Your financial score is {score:.2f}. You might be overspending; try controlling expenses."

    return {"message": msg}