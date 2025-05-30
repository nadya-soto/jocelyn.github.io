import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings:
        [
        "Data Scientist",
        "ML Engineer",
        "AI Solution Architect",
        "NLP Engineer",
        "Data Analyst",
        "AI Translator for Non-Tech Leaders"
            ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
