import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import { useInView } from "react-intersection-observer";


import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  const { ref: skillsRef, inView: skillsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInStyle = (visible, delay = "0s") => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}`,
  });

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* TÍTULO CENTRADO */}
        <Row className="justify-content-center mb-5">
          <Col md={10} className="text-center">
            <h1 style={{ fontSize: "2.5em", color: "white" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
          </Col>
        </Row>


  { /* Contenido principal */}
  <Row>
  <Col md={6} className="home-about-description">
  <div style={{ 
    paddingRight: "40px",
    borderRight: "3px solid #6f42c1",
    fontSize: "0.9em",
    position: "relative"
    
  }}>
  <p className="home-about-body" style={{ 
    fontSize: "1em",
    lineHeight: "1.8",
    textAlign: "justify"
  }}>
    I'm Jocelyn, a <span className="purple">Data Scientist</span> with a <span className="purple">Mathematical Edge</span>, specializing in optimizing business outcomes through AI and rigorous analytics.
    
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
    
{/* NUEVA COLUMNA DERECHA: Cursos o Certificaciones */}

<Col md={6} className="home-about-description d-flex align-items-center content-center">
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }}
  >
    <Tilt>
      <img 
        src={myImg} 
        className="img-fluid rounded" 
        alt="avatar" 
        style={{ 
          width: "200px",
          border: "3px solid #6f42c1",
          boxShadow: "0 5px 15px rgba(111, 66, 193, 0.3)",
          marginBottom: "30px"  
        }}
      />
    </Tilt>

  <div style={{ 
    backgroundColor: "rgba(111, 66, 193, 0.1)",
    padding: "15px",
    borderRadius: "10px",
      width: "100%", // Asegura que no se contraiga
      maxWidth: "600px", // Para evitar que se extienda mucho
      textAlign: "justify"
  }}>
    <b className="purple">Relevant Courses & Certifications:</b>
    <ul style={{ 
      paddingLeft: "20px",
      marginTop: "10px",
      listStyleType: "none",
       textAlign: "justify"
    }}>
      <li style={{ marginBottom: "20px" }}>
        <span style={{ marginRight: "5px" }}> <span className="wave" role="img" aria-label="brain">🤖</span>{" "} </span>
        <span className="purple">University of Essex – MSc (Distinction):</span> Machine Learning, Reinforcement Learning, AI, and Decision Analytics. Dissertation on femicide prevention using NLP.
      </li>
      <li style={{ marginBottom: "20px" }}>
        <span style={{ marginRight: "5px" }}> <span className="wave" role="img" aria-label="brain">🧠</span>{" "} </span>
        <span className="purple">ITAM – BSc Applied Mathematics:</span> Time Series, A/B Testing, Probability, Operations Research, and Stochastic Optimization.
      </li>
      <li style={{ marginBottom: "20px" }}>
        <span style={{ marginRight: "5px" }}> <span className="wave" role="img" aria-label="cloud">☁️</span>{" "} </span>
        <span className="purple">Microsoft Azure Fundamentals (AZ-900):</span> Certified – 2025
      </li>
      <li style={{ marginBottom: "20px" }}>
        <span style={{ marginRight: "5px" }}> <span className="wave" role="img" aria-label="snake">🐍</span>{" "} </span>
        <span className="purple">DataCamp – Python:</span> Certified – 2024
      </li>
      <li style={{ marginBottom: "20px" }}>
        <span style={{ marginRight: "5px" }}> <span className="wave" role="img" aria-label="brain">📜</span>{" "} </span>
        <span className="purple">TensorFlow Developer Certificate:</span> In progress (Expected July 2025)
      </li>
      <li style={{ marginBottom: "20px" }}>
        <span style={{ marginRight: "5px" }}> <span className="wave" role="img" aria-label="brain">🏅</span>{" "} </span>
        <span className="purple">DataCamp – Associate Data Scientist in Python:</span> Expected August 2025
      </li>
      <li>
        <span style={{ marginRight: "5px" }}> <span className="wave" role="img" aria-label="brain">🪄</span>{" "} </span>
        <span className="purple">Google – Gen AI Intensive Course:</span> In progress (Expected June 2025)
      </li>
    </ul>
  </div>
  </div>
</Col>

</Row>
        
        {/* Boton*/}
        <Row className="justify-content-center mt-5">
          <Col md="auto">
            <Link to="/about">
              <button
                style={{
                  backgroundColor: "#6f42c1",
                  border: "none",
                  padding: "15px 35px",
                  borderRadius: "50px",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                  marginRight: "20px",
                  marginTop: "60px",
                  boxShadow: "0 8px 20px rgba(111, 66, 193, 0.3)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#5a379e";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(111, 66, 193, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#6f42c1";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(111, 66, 193, 0.3)";
                }}
              >
                Work With Me
              </button>
            </Link>
          </Col>

          <Col md="auto">
            <Link to="/project">
              <button
                style={{
                  backgroundColor: "#6f42c1",
                  border: "none",
                  padding: "15px 35px",
                  borderRadius: "50px",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                  marginTop: "60px",
                  boxShadow: "0 8px 20px rgba(148, 145, 153, 0.3)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#5a379e";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(111, 66, 193, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#6f42c1";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(111, 66, 193, 0.3)";
                }}
              >
                See My Projects
              </button>
            </Link>
          </Col>
        </Row>

 <Row>
    {/* Skillset Section */}
      <div ref={skillsRef} style={{ marginTop: "5rem", ...fadeInStyle(skillsVisible, "0.2s") }}>
        <h1 style={{ fontSize: "2.5em",marginBottom: "5rem", color: "white" }}>
            Professional <span className="purple">Skillset</span> 
          </h1>
        <Techstack />
      </div>
        </Row>

        {/* SECCIÓN SOCIAL */}
        <Row>
          
          <Col md={12} className="home-about-social text-center mt-5">
            <h1 style={{
              fontSize: "2.5em",
              paddingBottom: "30px",
              marginTop: "4rem",
              position: "relative",
              display: "inline-block"
            }}>
              FIND <strong className="purple">ME ON</strong>
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
            </Col>
            <Col>
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;