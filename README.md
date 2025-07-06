# GenStart - AI-Powered Startup Idea Validator

GenStart is an advanced AI-powered startup idea generator that leverages multiple cutting-edge AI models to help entrepreneurs, developers, and innovators discover unique business opportunities. The system uses Claude 3.5 Sonnet and GPT-3.5 Turbo to analyze market trends and generate comprehensive startup ideas with detailed business plans.

## Project Structure

```
mimo-hack/
├── frontend/          # React-based user interface
├── backend/           # FastAPI-based AI service
└── README.md
```

## Features

- **Multi-AI Model System**: Uses Claude 3.5 Sonnet and GPT-3.5 Turbo with intelligent fallback mechanisms
- **Comprehensive Business Analysis**: Generates detailed startup ideas with problem analysis, solutions, and business models
- **Target Audience Identification**: Identifies and analyzes potential customer segments
- **Technology Stack Recommendations**: Suggests appropriate tools and platforms
- **Marketing Strategy Suggestions**: Provides go-to-market strategies
- **Risk Assessment**: Analyzes potential challenges and mitigation strategies

## Technology Stack

### Frontend
- **React 19**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Axios**: HTTP client for API communication
- **Material-UI**: Component library for consistent UI design

### Backend
- **FastAPI**: High-performance Python web framework
- **OpenRouter API**: Multi-model AI service integration
- **Pydantic**: Data validation and serialization
- **Python-dotenv**: Environment variable management

## Prerequisites

- Node.js 18+ and npm
- Python 3.8+
- OpenRouter API key (for AI model access)

## Installation and Setup

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   ```bash
   # Windows
   venv\Scripts\activate
   
   # macOS/Linux
   source venv/bin/activate
   ```

4. Install Python dependencies:
   ```bash
   pip install fastapi uvicorn requests python-dotenv pydantic
   ```

5. Create a `.env` file in the backend directory:
   ```
   GEMINI_API_KEY=your_openrouter_api_key_here
   ```

6. Start the backend server:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

## API Endpoints

### POST /api/generate
Generates startup ideas based on user input.

**Request Body:**
```json
{
  "prompt": "Your niche or trend description"
}
```

**Response:**
```json
{
  "ideas": [
    {
      "problem": "Problem description",
      "solution": "Solution approach",
      "targetAudience": "Target customer segment",
      "uniqueSellingPoint": "Differentiation factor",
      "businessModel": "Revenue model",
      "techStackOrTools": "Recommended technology stack",
      "difficulties": "Potential challenges",
      "potentialImpact": "Expected impact",
      "marketingStrategy": "Go-to-market strategy"
    }
  ]
}
```

## Development

### Backend Development
- The main application is in `main.py`
- API routes are in `routes/generate.py`
- AI service integration is in `services/genai_client.py`
- CORS middleware is in `middlewares/cors.py`

### Frontend Development
- Main application component is in `src/App.jsx`
- Form component is in `src/Components/PromptForm.jsx`
- About drawer is in `src/Components/AboutAppDrawer.jsx`
- API service is in `src/services/ideaAPI.js`

## Environment Variables

### Backend (.env)
- `GEMINI_API_KEY`: Your OpenRouter API key for AI model access

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team or create an issue in the repository. 