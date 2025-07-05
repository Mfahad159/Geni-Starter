

### ✅ Solution — Clean the JSON Before Parsing

import requests
import json
import os
import re
from dotenv import load_dotenv

load_dotenv()
OPENROUTER_API_KEY = os.getenv("GEMINI_API_KEY")

async def get_ideas(prompt: str):
    try:
        response = requests.post(
            url="https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:5173",
                "X-Title": "Idea Generator",
            },
            data=json.dumps({
                "model": "mistralai/mistral-7b-instruct",
                "messages": [
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                "max_tokens": 4000
            })
        )
        response.raise_for_status()
        result = response.json()
        content = result["choices"][0]["message"]["content"]

        # ✅ Clean markdown code block if present
        content = re.sub(r"```json|```", "", content).strip()

        # ✅ Parse JSON safely
        ideas = json.loads(content)
        return ideas

    except Exception as e:
        print("Error in get_ideas:", e)
        return []
