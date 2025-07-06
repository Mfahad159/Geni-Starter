

### ✅ Solution — Clean the JSON Before Parsing

import requests
import json
import os
import re
from dotenv import load_dotenv

load_dotenv()
OPENROUTER_API_KEY = os.getenv("GEMINI_API_KEY")

async def get_ideas(prompt: str):
    print(f"Starting API request with prompt: {prompt[:100]}...")
    
    # Try primary model first
    try:
        return await _try_model(prompt, "anthropic/claude-3.5-sonnet")
    except Exception as e:
        print(f"Primary model failed: {e}")
        # Try fallback model
        try:
            return await _try_model(prompt, "openai/gpt-3.5-turbo")
        except Exception as e2:
            print(f"Fallback model also failed: {e2}")
            return []

async def _try_model(prompt: str, model: str):
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
                "model": model,
                "messages": [
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                "max_tokens": 2000,
                "temperature": 0.5
            }),
            timeout=30
        )
        response.raise_for_status()
        result = response.json()
        print(f"API response status: {response.status_code}")
        print(f"Model used: {model}")
        content = result["choices"][0]["message"]["content"]
        print(f"Raw content length: {len(content)}")

        # ✅ Clean markdown code block if present
        content = re.sub(r"```json|```", "", content).strip()
        
        # ✅ Additional cleaning for common JSON issues
        content = re.sub(r'[\n\r\t]', ' ', content)
        content = re.sub(r'\s+', ' ', content)
        
        # ✅ Try to find JSON array start and end
        start_idx = content.find('[')
        end_idx = content.rfind(']')
        
        if start_idx != -1 and end_idx != -1 and end_idx > start_idx:
            content = content[start_idx:end_idx + 1]
        
        # ✅ Parse JSON safely with better error handling
        try:
            ideas = json.loads(content)
            if isinstance(ideas, list) and len(ideas) > 0:
                print(f"Successfully parsed {len(ideas)} ideas")
                return ideas
            else:
                print("Invalid JSON structure - not a list or empty")
                return []
        except json.JSONDecodeError as json_error:
            print(f"JSON parsing error: {json_error}")
            print(f"Content received: {content[:200]}...")
            return []

    except Exception as e:
        print(f"Error with model {model}: {e}")
        raise e
