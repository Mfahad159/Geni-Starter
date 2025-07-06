import React, { useState } from "react";
import PromptForm from "./Components/PromptForm";
import StartupIdeaCard from "./Components/IdeaCard";
import FloatingMenu from "./Components/FloatingMenu";
import Header from "./Components/Header";
const App = () => {
  const [ideas, setIdeas] = useState([]);
  const [isAboutDrawerOpen, setIsAboutDrawerOpen] = useState(false);
    const toggleAboutDrawer = () => {
    setIsAboutDrawerOpen(!isAboutDrawerOpen);
  };
  return (
    <div>
      <Header/>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
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
      <FloatingMenu/>
    </div>
  );
};

export default App;
