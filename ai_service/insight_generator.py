def generate_insights(transactions):
    total = sum(tx.get("amount", 0) for tx in transactions)
    count = len(transactions)

    if count == 0:
        return {"message": "No transactions found to generate insights."}

    avg = total / count

    msg = (
        f"You made {count} transactions this month with an average spending of ₹{avg:.2f}. "
        "Try reducing expenses in non-essential categories to improve savings."
    )

    return {"message": msg}