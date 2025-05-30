import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import povertyAppImg from "../../Assets/Projects/povertyAppImg.jpg";
import audioAppImg from "../../Assets/Projects/audioAppImg.jpg";
import sanctionsImg from "../../Assets/Projects/sanctionsImg.jpg";
import renewableImg from "../../Assets/Projects/renewableImg.jpg";
import connectxImg from "../../Assets/Projects/connectxImg.jpg";
import rlSuiteImg from "../../Assets/Projects/rlSuiteImg.jpg";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={povertyAppImg}
      isBlog={false}
      title="London Poverty Analysis"
      description="Built an interactive dashboard to explore poverty across London, using geospatial data with Streamlit and Plotly. Enabled policymakers and citizens to visualize key indicators at the borough level."
      ghLink="https://github.com/nadya-soto/London-Poverty-Analysis"
      demoLink="https://nadyasoto-london-poverty-analysis.streamlit.app/"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={audioAppImg}
      isBlog={false}
      title="Audio Analysis App"
      description="Created a real-time audio-to-text and NLP tool using Whisper and spaCy. Features include classification, sentiment analysis, keyword extraction, and Named Entity Recognition, ideal for live interviews or feedback streams."
      ghLink="https://github.com/nadya-soto/Audio-Analysis-App"
      demoLink="https://github.com/nadya-soto/Audio-Analysis-App"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={sanctionsImg}
      isBlog={false}
      title="UK Sanctions Data Pipeline"
      description="Cleaned and standardized the UK sanctions dataset to improve data quality for policy analysis. Automated formatting scripts and data validation."
      ghLink="https://github.com/nadya-soto/uk-sanctions"
       demoLink="https://jocelyn-soto-uk-sanctions.streamlit.app/"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={renewableImg}
      isBlog={false}
      title="Renewable Energy Forecasting"
      description="Built predictive models (ARIMA, LSTM, Prophet) to forecast solar and wind energy production. Achieved over 95% accuracy, supporting smarter energy planning and sustainability efforts."
      ghLink="https://github.com/nadya-soto/Forecast-Renewable-Energy-Predictions"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={connectxImg}
      isBlog={false}
      title="GridWorld Optimization (ConnectX)"
      description="Applied deep learning models (Q-Learning, SARSA, and Policy Gradient) to train agents in grid environments. Evaluated performance improvements via custom reward shaping and policy tracking."
      ghLink="https://github.com/nadya-soto/ConnectX_AI_Agents"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={rlSuiteImg}
      isBlog={false}
      title="Reinforcement Learning Suite"
      description="Implemented value iteration and policy iteration using Bellman equations in OpenAI Gym environments. Focused on long-term decision-making under uncertainty, with applications in strategy planning."
      ghLink="https://github.com/nadya-soto/FrozenLake-environment-in-OpenAI-Gym"
    />
  </Col>
</Row>
        
    {/* Find me on*/}
      
      <Row md={15} className="home-about-social tex t-center mt-5">
        <h1 style={{
          fontSize: "2em",
          paddingBottom: "40px",
          paddingTop: "40px",
          position: "relative",
          display: "inline-block"
        }}>
          CONTACT <strong className="purple">ME </strong>
          <span style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100px",
            height: "3px",
            backgroundColor: "#6f42c1",
            borderRadius: "3px"
          }}></span>
        </h1>
       
        <ul className="home-about-social-links"
          style={{
            listStyleType: "none",
            padding: 0,
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap"
          }}
        >
          <li className="social-icons">
            <a
              href="https://github.com/nadya-soto"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              style={{ 
                fontSize: "3rem",
                transition: "all 0.3s ease",
                color: "#6f42c1"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.2)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <AiFillGithub />
            </a>
          </li>

          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/nadya-soto/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              style={{ 
                fontSize: "3rem",
                transition: "all 0.3s ease",
                color: "#6f42c1"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.2)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <FaLinkedinIn />
            </a>
          </li>
          
          <li className="social-icons" style={{ 
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            fontSize: "1.5rem",
            padding: "10px 20px",
            backgroundColor: "rgba(111, 66, 193, 0.1)",
            borderRadius: "50px",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(111, 66, 193, 0.2)"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgba(111, 66, 193, 0.1)"}
          >
            <MdEmail style={{ color: "#6f42c1" }} />
            <span style={{ 
              color: "#6f42c1", 
              fontSize: "1.3rem",
              fontWeight: "500"
            }}>
              nadyasoto@icloud.com
            </span>
          </li>
        </ul>

        <p style={{ 
          marginTop: "2rem",
          fontSize: "1.2em",
          fontStyle: "italic"
          
        }}>
        </p>
      </Row>


  </Container>
</Container>
  );
}
        


export default Projects;
