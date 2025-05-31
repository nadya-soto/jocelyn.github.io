import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutCard() {
  return (
    <Container fluid id="about">
      <Container>
        {/* Título */}
        <Row className="justify-content-center mb-4">
          <Col md={12} className="text-center">
            <h1 style={{ fontSize: "2.5em", color: "white" }}>
              WORK <span className="purple">WITH ME</span>
            </h1>
          </Col>
        </Row>

        {/* Contenido principal */}
        <Row className="align-items-start gx-5 gy-4 justify-content-center">
          {/* Columna izquierda */}
          <Col md={5} className="about-img">
            <div style={{
              backgroundColor: "rgba(111, 66, 193, 0.1)",
              padding: "20px",
              borderRadius: "10px",
              fontSize: "1em",
              marginBottom: "20px"
            }}>
              <b className="purple">Why Jocelyn?</b>
              <ul style={{
                paddingLeft: "0",
                marginTop: "20px",
                listStyleType: "none",
                textAlign: "left"
              }}>
                <li style={{ marginBottom: "10px" }}>
                  <span className="wave" role="img" aria-labelledby="wave">🧠</span>
                  <span className="purple"> Academic Rigor:</span> Solid grounding in statistics, optimization, and machine learning
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <span className="wave" role="img" aria-labelledby="wave">🎯</span>
                  <span className="purple"> Business Alignment:</span> Success measured by your KPIs
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <span className="wave" role="img" aria-labelledby="wave">🔍</span>
                  <span className="purple"> Curiosity & Innovation:</span> Always exploring new tools, ideas, and questions to drive smarter solutions
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <span className="wave" role="img" aria-labelledby="wave">🤝</span>
                  <span className="purple"> Collaborative Spirit:</span> I build bridges between tech and business teams to get things done
                </li>
                <li>
                  <span className="wave" role="img" aria-labelledby="wave">❤️</span>
                  <span className="purple"> Empathy-Driven:</span> My models don’t just predict, they help solve real-world problems for real people
                </li>
              </ul>
            </div>

            <div style={{
              fontStyle: "italic",
              textAlign: "center",
              fontSize: "1em",
              marginTop: "10px"
            }}>

  If you're solving something meaningful, I’d love to help make it real with data. ✨
            </div>
          </Col>

          {/* Columna derecha */}
          <Col md={6} className="home-about-description">
            <div style={{
              paddingLeft: "30px",
              borderLeft: "3px solid #6f42c1"
            }}>
              <div style={{
                backgroundColor: "rgba(111, 66, 193, 0.1)",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px"
              }}>
                <ul style={{
                  listStyleType: "none",
                  paddingLeft: "0",
                  fontSize: "1.1em",
                  textAlign: "justify"
                }}>
                  <li style={{ marginBottom: "20px" }}>
                    <span className="wave" role="img" aria-labelledby="wave">📐</span>
                    I am a <span className="purple">Mathematician</span> and <span className="purple">ML developer</span> from Mexico, with a
                    <span className="purple"> MSc (with distinction)</span> from the University of Essex (UK) 🇬🇧 and a
                    <span className="purple"> BSc in Applied Mathematics</span> from ITAM 🇲🇽.
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <span className="wave" role="img" aria-labelledby="wave">📊</span>
                    <span className="purple"> Numbers, models, and mathematical thinking </span> are my comfort zone, I grew up solving equations for fun.
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <span className="wave" role="img" aria-labelledby="wave">🧠</span>
                    <span className="purple"> My mission?</span> Turn data into decisions and, occasionally, try to save the world with machine learning.
                  </li>
                   <li style={{ marginBottom: "15px" }}>
                    <span className="wave" role="img" aria-labelledby="wave">🌐</span>
                    <span className="purple"> International perspective:</span> I’ve worked and studied across cultures bridging context, language, and insight.
                  </li>
                  <li>
                    <span className="wave" role="img" aria-labelledby="wave">⚡</span>
                    <span className="purple"> Startup & enterprise mindset:</span> Comfortable adapting to fast-changing environments or structured corporate processes.
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        {/* Mensaje final */}
        <Row className="justify-content-center">
          <Col md={10}>
            <div style={{
              fontStyle: "italic",
              textAlign: "center",
              fontSize: "1em",
              marginTop: "40px"
            }}>
              Thanks for stopping by and for reading this far! <span className="wave" role="img" aria-labelledby="wave">🚀</span>
              <li style={{ marginTop: "10px", listStyleType: "none" }}>
                <span className="wave" role="img" aria-labelledby="wave">🤝</span>
                <span className="purple"> Scroll down to see how I can help and what we can build together.</span>
              </li>
            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default AboutCard;
