def chatbot_reply(message):
    message = message.lower()

    if "budget" in message:
        return "A good rule is the 50-30-20 plan: 50% needs, 30% wants, 20% savings."
    elif "save" in message:
        return "Try saving at least 20% of your monthly income."
    elif "invest" in message:
        return "Diversify your investments and avoid putting all money in one asset."
    elif "loan" in message:
        return "Keep your EMI below 40% of your take-home salary."
    else:
        return "I'm happy to help! Try asking about budgeting, savings, loans or investments."