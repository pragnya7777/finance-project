import json 
import datetime 
 
class ExpenseTracker: 
    def __init__(self): 
        self.expenses = [] 
        self.load_data() 
 
    def add_expense(self, amount, category, description): 
        expense = { 
            'amount': amount, 
            'category': category, 
            'description': description, 
            'date': str(datetime.datetime.now()) 
        } 
        self.expenses.append(expense) 
        self.save_data() 
        return f"Added expense: ${amount} for {description}" 
 
    def get_total_expenses(self): 
        return sum(e['amount'] for e in self.expenses) 
 
    def get_by_category(self, category): 
        return [e for e in self.expenses if e['category'] == category] 
 
    def save_data(self): 
        with open('data/expenses.json', 'w') as f: 
            json.dump(self.expenses, f) 
 
    def load_data(self): 
        try: 
            with open('data/expenses.json', 'r') as f: 
                self.expenses = json.load(f) 
        except: 
            self.expenses = [] 
