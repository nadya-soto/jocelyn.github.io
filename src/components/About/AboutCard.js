import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptopImg from "../../Assets/about.png";

function AboutCard() {
  return (
    <Container fluid id="about">
      <Container>
      
        {/* Título centrado */}
        <Row className="justify-content-center mb-5">
          <Col md={15} className="text-center">
            <h1 style={{ fontSize: "2.5em", color: "white" }}>
              ABOUT <span className="purple">ME</span>
            </h1>
          </Col>
        </Row>

        {/* imagen */}
        <Row className="align-items-center gx-5 gy-6 justify-content-center">
          <Col
              md={4}
              className="about-img"
              style={{ 
                padding: "2rem",
              }}
            >
          <div style={{ 
          backgroundColor: "rgba(111, 66, 193, 0.1)",
          padding: "15px",
          borderRadius: "10px",
          fontSize: "1em",
          marginBottom: "20px"
        }}>
          <b className="purple">Why Work With Me?</b>
          <ul style={{ 
            paddingLeft: "20px",
            marginTop: "10px",
            listStyleType: "none"
          }}>
            <li style={{ marginBottom: "10px" }}>
              <span style={{ marginRight: "5px" }}>  <span className="wave" role="img" aria-labelledby="wave">🧠</span> </span>
              <span className="purple">Academic Rigor:</span> Solid grounding in statistics, optimization, and machine learning
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span style={{ marginRight: "5px" }}>  <span className="wave" role="img" aria-labelledby="wave">🛠️</span> </span>
              <span className="purple">Deployment Focus:</span> AWS, Docker, Streamlit, and MLOps best practices
            </li>
            <li>
              <span style={{ marginRight: "5px" }}>  <span className="wave" role="img" aria-labelledby="wave">🎯</span> </span>
              <span className="purple">Business Alignment:</span> Success measured by your KPIs
            </li>
          </ul>
        </div>
        
        <div style={{ 
          fontStyle: "italic",
          textAlign: "center",
          margin: "20px 0",
          fontSize: "1em",
          paddingTop: "10px"
        }}>
          "I don't just build models, I build solutions that scale."
        </div>

              <img 
                src={laptopImg} 
                 className="img-fluid rounded align-items-center" 
                alt="about" 
                style={{ 
                  border: "3px solid #6f42c1",
                  width: "300px",
                  boxShadow: "0 5px 15px rgba(111, 66, 193, 0.3)"
                  
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
            </Col>

            {/* Contenido principal */}
          <Col md={7} className="home-about-description">
            <div style={{ 
              paddingLeft: "40px",
              borderLeft: "3px solid #6f42c1",
              fontSize: "0.9em",
              position: "relative"
              
            }}>
              <p className="home-about-body" style={{ 
                fontSize: "1em",
                lineHeight: "1.8",
                textAlign: "justify"
              }}>
                I'm a <span className="purple">Data Scientist</span> with a <span className="purple">Mathematical Edge</span>, specializing in optimizing business outcomes through AI and rigorous analytics.
                
                <br /><br />
                
                <div style={{ 
                  backgroundColor: "rgba(111, 66, 193, 0.1)",
                  padding: "15px",
                  borderRadius: "10px",
                  marginBottom: "20px"
                }}>
                  <b className="purple">My Education:</b>
                  <ul style={{ 
                    paddingLeft: "20px",
                    marginTop: "10px",
                    listStyleType: "none"
                  }}>
                    <li style={{ marginBottom: "10px" }}>
                      <span style={{ marginRight: "5px" }}> <span className="wave" role="img" aria-labelledby="wave">🎓</span> </span>
                      <span className="purple">MSc in Optimisation and Data Science</span>- University of Essex (Distinction)
                      </li>
                    <li>
                      <span style={{ marginRight: "5px" }}> <span className="wave" role="img" aria-labelledby="wave"> 🎓</span></span>
                      <span className="purple">BSc in Applied Mathematics</span>- Instituto Tecnológico Autónomo de México (ITAM)
                    </li>
                  </ul>
                </div>
                
                <div style={{ 
                  backgroundColor: "rgba(111, 66, 193, 0.1)",
                  padding: "15px",
                  borderRadius: "10px",
                  marginBottom: "20px"
                }}>
                  <b className="purple">What I Deliver:</b>
                  <ul style={{ 
                    paddingLeft: "20px",
                    marginTop: "10px",
                    listStyleType: "none"
                  }}>
                    <li style={{ marginBottom: "20px" }}>
                      <span style={{ marginRight: "5px" }}> <span className="wave" role="img" aria-label="brain">🧠</span>{" "} </span>
                      <span className="purple">NLP Expertise:</span> Built audio/text pipelines with Whisper, spaCy, and classification models for real-time analysis </li>
                    <li style={{ marginBottom: "20px" }}>
                      <span style={{ marginRight: "5px" }}> <span className="wave" role="img" aria-labelledby="wave">💬</span> </span>
                      <span className="purple">Social Impact:</span> Designed tools to analyze poverty, government budgets, and social risk using data science </li>
                    <li style={{ marginBottom: "20px" }}>
                      <span style={{ marginRight: "5px" }}> <span className="wave" role="img" aria-labelledby= "globe">🌍</span></span>
                      <span className="purple">Accessible AI:</span> Developed web apps that democratize insights for non-technical users, used in public services and policy </li>
                  <li style={{ marginBottom: "20px" }}>
                      <span style={{ marginRight: "5px" }}> <span className="wave" role="img" aria-labelledby="wave"> 📈</span></span>
                      <span className="purple">Research Rigor:</span> Academic background in optimization, time series, and reinforcement learning applied to real-world data</li>
                      </ul>
                </div>
                
            
              </p>
            </div>
          </Col>
          
         
        </Row>

        
      </Container>
    </Container>
  );
}

export default AboutCard;