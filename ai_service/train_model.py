import pandas as pd
import joblib

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

# Load dataset
data = pd.read_csv("data/transactions.csv")

X = data["description"]
y = data["category"]

# Convert text → numbers
vectorizer = TfidfVectorizer()
X_vector = vectorizer.fit_transform(X)

# Train model
model = LogisticRegression()
model.fit(X_vector, y)

# Save model and vectorizer
joblib.dump(model, "model/expense_model.pkl")
joblib.dump(vectorizer, "model/vectorizer.pkl")

print("Model saved successfully")