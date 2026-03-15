def spending_insight(expenses):

    total = sum(expenses.values())

    insights = {}

    for category, amount in expenses.items():
        percent = (amount / total) * 100
        insights[category] = round(percent, 2)

    return insights


expenses = {
    "Food": 5000,
    "Transport": 1500,
    "Shopping": 2000,
    "Utilities": 1000
}

print(spending_insight(expenses))