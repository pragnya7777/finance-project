def detect_fraud(transactions):
    alerts = []

    for tx in transactions:
        amount = tx.get("amount", 0)
        location = tx.get("location", "")
        category = tx.get("category", "")

        if amount > 50000:
            alerts.append(f"Transaction of ₹{amount} is unusually high.")
        if location not in ["India", "Bangalore", "Hyderabad"]:
            alerts.append(f"Transaction from unfamiliar location {location}.")
        if category == "crypto":
            alerts.append("Crypto transactions are often risky.")

    if alerts:
        return {"message": "⚠ Potential fraud detected", "details": alerts}
    
    return {"message": "No fraud detected in your recent transactions."}