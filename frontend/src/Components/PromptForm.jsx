import React, { useState } from "react";
import axios from "axios";

const PromptForm = ({ onResults }) => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
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
    // ...existing code...
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "2rem" }}>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your niche or trend..."
        style={{
          padding: "10px",
          width: "60%",
          maxWidth: "400px",
          background: "#27272a",
          color: "#f3f4f6",
          border: "1px solid #333",
          borderRadius: "8px",
          outline: "none",
        }}
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "10px 20px",
          marginLeft: "10px",
          marginTop:"10px",
          background: "#6366f1",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate"}
      </button>
    </form>
  );
};

export default PromptForm;
