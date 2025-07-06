import React, { useState, useEffect } from "react";
import axios from "axios";

const PromptForm = ({ onResults }) => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [loadingIndex, setLoadingIndex] = useState(0);

  const loadingMessages = [
    "Processing your request...",
    "Searching for innovative ideas...",
    "Validating the Solution",
    "Analyzing market trends...",
    "Almost there...",
    "Generating unique solutions...",
    "Creating business Models...",
    "Finding the perfect niche...",
  ];

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setLoadingIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 2000); // Change message every 2 seconds
    }
    return () => clearInterval(interval);
  }, [loading, loadingMessages.length]);

  useEffect(() => {
    setLoadingMessage(loadingMessages[loadingIndex]);
  }, [loadingIndex, loadingMessages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setLoadingIndex(0);
    try {
      const res = await axios.post("http://localhost:8000/api/generate", {
        prompt,
      });
      onResults(res.data.ideas); // pass ideas back to parent
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your niche or trend..."
          disabled={loading}
          style={{
            padding: "12px 16px",
            width: "60%",
            maxWidth: "400px",
            background: "#27272a",
            color: "#f3f4f6",
            border: "1px solid #333",
            borderRadius: "12px",
            outline: "none",
            fontSize: "16px",
            transition: "all 0.3s ease",
            opacity: loading ? 0.7 : 1,
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px 24px",
            marginLeft: "12px",
            marginTop: "12px",
            background: loading ? "#4b5563" : "#a07dff",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "16px",
            fontWeight: "600",
            transition: "all 0.3s ease",
            transform: loading ? "scale(0.98)" : "scale(1)",
          }}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>

      {/* Loading Message Display */}
      {loading && (
        <div style={{
          marginTop: "20px",
          padding: "16px 24px",
          background: "rgba(160, 125, 255, 0.1)",
          border: "1px solid rgba(160, 125, 255, 0.3)",
          borderRadius: "12px",
          maxWidth: "500px",
          margin: "20px auto 0",
          animation: "fadeIn 0.5s ease-in"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px"
          }}>
            {/* Loading Spinner */}
            <div style={{
              width: "20px",
              height: "20px",
              border: "2px solid rgba(160, 125, 255, 0.3)",
              borderTop: "2px solid #a07dff",
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }}></div>
            
            {/* Loading Message */}
            <span style={{
              color: "#e0e0e0",
              fontSize: "14px",
              fontWeight: "500",
              fontFamily: "'Segoe UI', sans-serif"
            }}>
              {loadingMessage}
            </span>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PromptForm;
