import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card
      className="quote-card-view"
      style={{
        maxWidth: "800px",
        width: "50%",
        margin: "2rem auto",
        border: "none",
        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Card.Body style={{ padding: "2rem" }}>
        <blockquote className="blockquote mb-0">
          <h1 style={{ 
            fontWeight: "600",
            marginBottom: "1.5rem",
            color: "#6f42c1"
          }}>
            Work with Me
          </h1>
          
          <h3 style={{ 
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "0.5rem"
          }}>
            Data Scientist with a Mathematical Edge
          </h3>
          
          <p style={{ 
            fontSize: "1.1rem",
            color: "rgb(155 126 172)",
            marginBottom: "1.5rem",
            fontStyle: "italic"
          }}>
            Optimizing business outcomes through AI and rigorous analytics
          </p>
          
          <div style={{ fontSize: "1.1rem", textAlign: "justify" }}>
            <p>
              I hold an <span className="purple">MSc in Optimisation and Data Science</span> (University of Essex, Distinction) and a <span className="purple">BSc in Applied Mathematics</span> (ITAM). My strength lies in merging technical depth (Python, ML, cloud) with strategic thinking to deliver solutions that:
            </p>
            
            <ul style={{ paddingLeft: "1.5rem", margin: "1rem 0" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <span className="purple">Reduce costs</span> (e.g., supply chain models saving 20% in logistics)
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <span className="purple">Enhance customer experience</span> (e.g., NLP chatbots with 90% accuracy)
              </li>
              <li>
                <span className="purple">Support decision-making</span> (e.g., predictive models for risk assessment)
              </li>
            </ul>
            
            <p style={{ fontWeight: "600", margin: "1.5rem 0 0.5rem" }}>
              Why partner with me?
            </p>
            
            <ul style={{ paddingLeft: "1.5rem", margin: "0.5rem 0" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <span className="purple">✔ Academic rigor:</span> Strong foundation in math/statistics for robust models
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <span className="purple">✔ Deployment focus:</span> Experience with AWS, Docker, and MLOps tools
              </li>
              <li>
                <span className="purple">✔ Business alignment:</span> I measure success by your KPIs, not just model accuracy
              </li>
            </ul>
            
            <p style={{ fontWeight: "600", margin: "1.5rem 0 0.5rem" }}>
              Selected Projects:
            </p>
            
            <ul style={{ paddingLeft: "1.5rem", margin: "0.5rem 0 1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <span className="purple">NLP for Social Good:</span> Built a sentiment analysis tool to track mental health trends in UK communities
              </li>
              <li>
                <span className="purple">Retail Forecasting:</span> Developed a demand prediction model boosting revenue by 15% for an e-commerce startup
              </li>
            </ul>
            
            <p style={{ 
              color: "rgb(155 126 172)", 
              fontStyle: "italic",
              textAlign: "center",
              margin: "1.5rem 0 0",
              fontSize: "1.2rem"
            }}>
              "I don't just build models—I build solutions that scale."
            </p>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;