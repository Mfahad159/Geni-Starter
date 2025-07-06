from fastapi import FastAPI
from routes import generate
from middlewares.cors import add_cors
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

add_cors(app)

app.include_router(generate.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "API is running"}