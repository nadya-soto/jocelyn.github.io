import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            {/* Text Section - Diseño Limpio */}
            <Col md={8} className="home-header" style={{ padding: "60px 20px" }}>
              <h1 style={{ 
                fontSize: "3rem",
                fontWeight: 600,
                color: "#f8f9fa",
                lineHeight: "1",
                marginBottom: "1.5rem"
              }}>
                Hi there!{" "}
                
                <span className="wave" role="img" aria-labelledby="wave">
              
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{
                fontSize: "2.8rem",
                marginBottom: "2rem",
                lineHeight: "1.3",
                color: "#ffffff"
              }}>
                I'm <span className="main-name" style={{
                  color: "#6f42c1",
                  fontWeight: 700,
                  textShadow: "0 0 15px rgba(111, 66, 193, 0.5)"
                }}>Jocelyn Soto</span>
              </h1>

              <div style={{ 
                padding: "20px 0",
                textAlign: "left",
                minHeight: "120px"
              }}>
                <Type />
              </div>
              
              <p style={{ 
                color: "#d1c4e9",
                fontSize: "1rem",
               
                lineHeight: "1.7",
                fontWeight: 500,
                maxWidth: "90%"
              }}> 
                {/*  <span style={{ 
                  color: "#6f42c1",
                  fontWeight: 600,
                  position: "relative"
                }}>
               ML/AI Specialist
              </span> crafting intelligent solutions that transform data into business value */}
              
              
              </p>
            </Col>

            {/* Image Section */}
            <Col md={4} style={{ 
              padding: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <div style={{
                position: "relative",
                width: "100%",
                maxWidth: "500px",
                transition: "all 0.3s ease"
              }}>
                <img
                  src={homeLogo}
                  alt="Data Science Illustration"
                  className="img-fluid floating"
                  style={{ 
                    maxHeight: "450px",
                    width: "100%",
                    filter: "drop-shadow(0 10px 20px rgba(111, 66, 193, 0.3))",
                    animation: "floating 4s ease-in-out infinite"
                  }}
                />
                <div style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  background: "radial-gradient(circle, rgba(111, 66, 193, 0.1) 0%, transparent 70%)",
                  zIndex: -1,
                  borderRadius: "50%"
                }}></div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;