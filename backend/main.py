from fastapi import FastAPI
from routes import generate
from middlewares.cors import add_cors
from dotenv import load_dotenv
from fastapi import APIRouter, Request
from services.genai_client import get_ideas
import os

load_dotenv()


GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

router = APIRouter()

app=FastAPI()

add_cors(app)


app.include_router(generate.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "API is running"}
@router.post("/generate")
async def generate_ideas(request: Request):
    data = await request.json()
    prompt = data.get("prompt", "")

    # Compose a detailed prompt for the LLM
    llm_prompt = (
        f"Generate 3 unique startup ideas in the {prompt} niche. "
        "For each idea, provide:\n"
        "- A catchy title\n"
        "- A detailed description (at least 5-7 lines)\n"
        "- At least 10 relevant hashtags\n"
        "Format the response as JSON:\n"
        '[{"title": "...", "description": "...", "hashtags": ["#tag1", ...]}, ...]'
    )

    # Call your LLM client (update get_ideas to use this prompt)
    ideas = await get_ideas(llm_prompt)

    return {"ideas": ideas}