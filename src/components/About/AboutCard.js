import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card
      className="quote-card-view"
      style={{
        maxWidth: "600px",
        width: "100%",
        margin: "2rem auto",
      }}
    >
      <Card.Body style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
      <blockquote className="blockquote mb-0">
        <p style={{ fontSize: "1.25rem", textAlign: "justify" }}>
            Hello! I'm <span className="purple">Jocelyn Soto</span> from Mexico.
            <br />
            <br />
            A passionate Data Scientist and ML Developer with a solid fundation in <span className="purple">Mathematics, Statistics, and Computer Science.</span> 
            <br />
            <br />
            I hold a MSc (with Distinction) in <span className="purple">Optimisation and Data Science</span> from the University of Essex, and a BSc in <span className="purple">Applied Mathematics</span> from Instituto Tecnológico Autónomo de México (ITAM). 
            <br />
            <br />
            I specialize in building Machine Learning and AI-driven tools that generate real-world impact, particularly projects focused on social good and innovation.
            <br />
            <br />
            If you're looking for a <span className="purple">creative, reliable, and technically solid </span> partner ready to bring your data ideas to life, you're in the right place!
          </p>
          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            Let's collaborate and make your data tell a story worth sharing.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
