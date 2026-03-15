# auth.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import hashlib
import jwt
import time

router = APIRouter()

SECRET_KEY = "YOUR_SECRET_KEY"  # change this in production

fake_db = {}  # temporary in-memory DB

class User(BaseModel):
    email: str
    password: str

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

@router.post("/signup")
def signup(user: User):
    if user.email in fake_db:
        raise HTTPException(status_code=400, detail="User already exists")
    fake_db[user.email] = {
        "email": user.email,
        "password": hash_password(user.password)
    }
    return {"message": "Signup successful"}

@router.post("/login")
def login(user: User):
    if user.email not in fake_db:
        raise HTTPException(status_code=400, detail="User not found")
    if fake_db[user.email]["password"] != hash_password(user.password):
        raise HTTPException(status_code=401, detail="Invalid password")
    token = jwt.encode({
        "email": user.email,
        "exp": time.time() + 3600
    }, SECRET_KEY)
    return {"message": "Login successful", "token": token}