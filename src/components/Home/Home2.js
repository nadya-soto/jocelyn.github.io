import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Home2() {
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

        {/* CONTENIDO PRINCIPAL */}
        <Row className="align-items-center gx-5 gy-6 justify-content-center">
          <Col md={3} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid rounded align-items-center" 
                alt="avatar" 
                style={{ 
                  border: "3px solid #6f42c1",
                  boxShadow: "0 5px 15px rgba(111, 66, 193, 0.3)"
                }}
              />
            </Tilt>
          </Col>
          
          <Col md={7} className="home-about-description">
            <div style={{ 
              paddingLeft: "30px",
              borderLeft: "3px solid #6f42c1",
              position: "relative"
            }}>
              <p className="home-about-body" style={{ 
                fontSize: "1.2em",
                lineHeight: "1.8",
                textAlign: "justify"
              }}>
                I'm Jocelyn, a <b className="purple">Data Scientist</b> with an <b className="purple">MSc (with distinction)</b> from the University of Essex and a passion for <b className="purple">deploying ML models</b> that solve real business problems.
                
                <br /><br />
                
                <div style={{ 
                  backgroundColor: "rgba(111, 66, 193, 0.1)",
                  padding: "15px",
                  borderRadius: "10px",
                  marginBottom: "20px"
                }}>
                  <b className="purple">What I do best:</b>
                  <ul style={{ 
                    paddingLeft: "40px",
                    marginTop: "10px",
                    listStyleType: "none"
                  }}>
                    <li style={{ marginBottom: "10px" }}>
                      <span style={{ marginRight: "10px" }}>🚀</span>
                      <i><b className="purple">End-to-end ML development:</b></i> From exploratory analysis to cloud deployment (AWS/GCP)
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <span style={{ marginRight: "10px" }}>📊</span>
                      <i><b className="purple">Data storytelling:</b></i> Translating complex results into actionable insights
                    </li>
                    <li>
                      <span style={{ marginRight: "10px" }}>🤖</span>
                      <i><b className="purple">NLP & Automation:</b></i> Chatbots, sentiment analysis, and process optimization
                    </li>
                  </ul>
                </div>
                
                <div style={{ 
                  fontStyle: "italic",
                  textAlign: "center",
                  margin: "20px 0",
                  fontSize: "1em",
                  paddingTop: "30px"
                }}>
                  Let's turn your data into competitive advantage.
                </div>
              </p>
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
                About Me
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
                Projects
              </button>
            </Link>
          </Col>
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

            <p style={{ 
              marginTop: "2rem",
              fontSize: "1.2em",
              fontStyle: "italic"
              
            }}>
              <span className="purple">Let's connect and create something amazing together.</span>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;