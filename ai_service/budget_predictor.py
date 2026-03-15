from sklearn.linear_model import LinearRegression
import numpy as np

def predict_budget(income, expenses):
    weeks = np.array([1, 2, 3]).reshape(-1, 1)
    spending = np.array([1200, 1500, 1700])

    model = LinearRegression()
    model.fit(weeks, spending)

    week4 = float(model.predict([[4]])[0])
    predicted_total = float(sum(spending) + week4)

    remaining_budget = income - sum(expenses.values())

    if predicted_total > remaining_budget:
        msg = (
            f"Your predicted total spending for next week is ₹{round(week4, 2)}. "
            f"You may exceed your remaining budget of ₹{remaining_budget}. "
            "Consider reducing non-essential expenses."
        )
    else:
        msg = (
            f"Your expected next week spending is ₹{round(week4, 2)}, "
            "which fits well within your remaining budget. Keep it up!"
        )

    return {"message": msg}