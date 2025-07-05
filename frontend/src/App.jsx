import React, { useState } from "react";
import PromptForm from "./Components/PromptForm";
import StartupIdeaCard from "./Components/IdeaCard";

const App = () => {
  const [ideas, setIdeas] = useState([]);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
        AI Idea Generator
      </h1>

      <PromptForm onResults={(data) => setIdeas(data)} />

      <div style={{ marginTop: "2rem" }}>
       {Array.isArray(ideas) && ideas.map((idea, idx) => (
        <StartupIdeaCard
          key={idx}
          problem={idea.problem}
          solution={idea.solution}
          targetAudience={idea.targetAudience}
          uniqueSellingPoint={idea.uniqueSellingPoint}
          businessModel={idea.businessModel}
          techStackOrTools={idea.techStackOrTools}
          difficulties={idea.difficulties}
          potentialImpact={idea.potentialImpact}
          marketingStrategy={idea.marketingStrategy}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
