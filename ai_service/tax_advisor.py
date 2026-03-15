def tax_advice(income, deductions=0):
    taxable = income - deductions

    if taxable < 250000:
        msg = "You do not need to pay tax under the basic exemption limit."
    elif taxable < 500000:
        msg = "You fall under the 5% tax slab. Consider using 80C deductions to reduce tax."
    else:
        msg = "You fall under a higher tax slab. Investing in ELSS, PPF, or NPS can reduce your taxable income."

    return {"message": msg}