import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import ServicesCard from "./ServicesCard";
import laptopImg from "../../Assets/about.png";
import { useInView } from "react-intersection-observer";

function About() {
  // useInView para cada sección con threshold 0.1 (10% visible)
  const { ref: bioRef, inView: bioVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: servicesRef, inView: servicesVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: skillsRef, inView: skillsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: titleRef, inView: titleVisible } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Estilos para animar fade-in y movimiento
  const fadeInStyle = (visible, delay = "0s") => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.8s ease-out ${delay}, transform 0.8s ease-out ${delay}`,
  });

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>

        {/* TITULO - fila aparte, centrado */}
        <Row style={{ justifyContent: "center", marginBottom: "0rem" }}>
          <Col md={12} style={{ textAlign: "center" }}>
            <h1
              ref={titleRef}
              style={{
                fontSize: "2em",
                ...fadeInStyle(titleVisible),
              }}
            >
              Get to <strong className="purple">Know Me</strong>
            </h1>
          </Col>
        </Row>

        {/* Biografía + Imagen */}
        <Row
          ref={bioRef}
          style={{ justifyContent: "center", ...fadeInStyle(bioVisible) }}
        >
          <Col
            md={5}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              paddingLeft: "0rem", paddingRight: "5rem" 
            }}
          >
            <Aboutcard />
          </Col>

          <Col
            md={4}
            style={{ paddingTop: "200px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Services */}
        <Row
          ref={servicesRef}
          style={{ justifyContent: "center", marginBottom: "3rem", ...fadeInStyle(servicesVisible, "0.3s") }}
        >
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <ServicesCard />
          </Col>
        </Row>

        {/* Skillset */}
        <h1
          ref={skillsRef}
          className="project-heading"
          style={{ marginBottom: "2rem", ...fadeInStyle(skillsVisible, "0.6s") }}
        >
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <div style={fadeInStyle(skillsVisible, "0.9s")}>
          <Techstack />
        </div>
      </Container>
    </Container>
  );
}

export default About;
