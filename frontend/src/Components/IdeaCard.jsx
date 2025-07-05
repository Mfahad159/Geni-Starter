import React, { useState, useEffect } from "react";

const StartupIdeaCard = ({
  problem,
  solution,
  targetAudience,
  uniqueSellingPoint,
  businessModel,
  techStackOrTools,
  difficulties,
  potentialImpact,
  marketingStrategy,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `
Problem: ${problem}

Solution: ${solution}

Target Audience: ${targetAudience}

Unique Selling Point: ${uniqueSellingPoint}

Business Model: ${businessModel}

Tech Stack / Tools: ${techStackOrTools}

Difficulties: ${difficulties}

Potential Impact: ${potentialImpact}

Marketing Strategy: ${marketingStrategy}
    `.trim();

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(textToCopy);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const renderSection = (heading, content) => (
    <div className="section">
      <h4 className="section-heading">{heading}</h4>
      <p className="idea-description">{content}</p>
    </div>
  );

  return (
    <>
      <style>
        {`
        .idea-card {
          z-index: 100;
          border: 1px solid #2a2a2e;
          border-radius: 12px;
          padding: 20px;
          margin: 16px auto;
          width: 92%;
          max-width: 720px;
          background: linear-gradient(145deg, #1f1f22, #26262b);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
          color: #f3f4f6;
          position: relative;
          font-family: "Segoe UI", sans-serif;
        }

        .copy-button {
          position: absolute;
          top: 10px;
          right: 12px;
          cursor: pointer;
          font-size: 14px;
          color: #22d3ee;
          border: 1px solid #22d3ee;
          border-radius: 50px;
          padding: 6px 12px;
          transition: all 0.3s ease;
          background-color: transparent;
          appearance: none;
          outline: none;
        }

        .copy-button:hover {
          background-color: #22d3ee;
          color: #0f172a;
          transform: scale(1.05);
        }

        .copy-button.copied {
          background-color: #22c55e;
          color: #f0fdf4;
          border-color: #22c55e;
        }

        .section {
          margin-bottom: 20px;
        }

        .section-heading {
          border-left: 4px solid #6366f1;
          padding-left: 10px;
          font-size: 16px;
          color: #93c5fd;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .idea-description {
          font-size: 16px;
          line-height: 1.6;
          color: #e5e7eb;
          padding: 8px 10px;
          background-color: #2c2c30;
          border-radius: 8px;
        }
      `}
      </style>

      <div className="idea-card">
        <button
          onClick={handleCopy}
          title="Copy full idea"
          className={`copy-button ${copied ? "copied" : ""}`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>

        {renderSection("Problem", problem)}
        {renderSection("Solution", solution)}
        {renderSection("Target Audience", targetAudience)}
        {renderSection("Unique Selling Point", uniqueSellingPoint)}
        {renderSection("Business Model", businessModel)}
        {renderSection("Tech Stack / Tools", techStackOrTools)}
        {renderSection("Difficulties", difficulties)}
        {renderSection("Potential Impact", potentialImpact)}
        {renderSection("Marketing Strategy", marketingStrategy)}
      </div>
    </>
  );
};

export default StartupIdeaCard;
