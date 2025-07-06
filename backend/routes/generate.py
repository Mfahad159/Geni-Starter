from fastapi import APIRouter
from pydantic import BaseModel
from services.genai_client import get_ideas

router = APIRouter()

class PromptRequest(BaseModel):
    prompt: str

@router.post("/generate")
async def generate_ideas(data: PromptRequest):
    ideas = await get_ideas(
        f"""You are a startup idea expert. Generate 1 unique startup idea in the "{data.prompt}" niche.

IMPORTANT: Return ONLY valid JSON array with no markdown formatting, no explanations, no extra text.

Format exactly like this:
[
{{
    "problem": "What problem does it solve?",
    "solution": "How the startup solves it.",
    "targetAudience": "Who needs this?",
    "uniqueSellingPoint": "Why is this different?",
    "businessModel": "How does it make money?",
    "techStackOrTools": "Suggested tools or platforms.",
    "difficulties": "Challenges in building or growing.",
    "potentialImpact": "Future or social impact.",
    "marketingStrategy": "How to reach early users."
}}
]

Return ONLY the JSON array, nothing else."""
    )


    return {"ideas": ideas}
