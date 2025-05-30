import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import ServicesCard from "./ServicesCard";
import { useInView } from "react-intersection-observer";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function About() {
  const { ref: bioRef, inView: bioVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: servicesRef, inView: servicesVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: skillsRef, inView: skillsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInStyle = (visible, delay = "0s") => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}`,
  });

  return (
    <Container fluid  id="about" className="about-section" style={{ position: "relative" }}>
      <Particle />
      <div style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at 70% 30%, rgba(111, 66, 193, 0.08) 0%, transparent 50%)",
        zIndex: 0
      }}></div>
      
      <Container style={{ position: "relative", zIndex: 1 }}>
        {/* Bio + Image Section */}
        <Row
          ref={bioRef}
          style={{ 
            justifyContent: "center", 
            alignItems: "center",
            marginBottom: "4rem",
            paddingTop: "3rem",
            ...fadeInStyle(bioVisible)
          }} 
        >
         
            <Aboutcard />
        </Row>
        {/* Services Section */}
        <Row
          ref={servicesRef}
          style={{ 
            justifyContent: "center", 
            marginBottom: "5rem",
            ...fadeInStyle(servicesVisible, "0.3s") 
          }}
        >
          <Col md={17}>
            {/*<h2 
              style={{
                fontSize: "2rem",
                fontWeight: 600,
                marginBottom: "2rem",
                color: "#f8f9fa",
                textAlign: "center",
                position: "relative",
                display: "inline-block",
                left: "50%",
                transform: "translateX(-50%)"
              }}
            >
              <span style={{
                position: "absolute",
                bottom: "-8px",
                left: 0,
                width: "100%",
                height: "3px",
                background: "linear-gradient(90deg, #6f42c1, transparent)",
                borderRadius: "3px"
              }}></span>
              My <span className="purple">Services</span>
            </h2>*/}
            <ServicesCard />
          </Col>
        </Row>

        {/* Skillset Section */}
        <div ref={skillsRef} style={{ marginTop: "0rem", ...fadeInStyle(skillsVisible, "0.6s") }}>
          <h1 style={{ fontSize: "2.5em",marginBottom: "5rem", color: "white" }}>
              Professional <span className="purple">Skillset</span> 
            </h1>
          <Techstack />
        </div>
        {/* Find me on*/}
      
      <Row md={15} className="home-about-social tex t-center mt-5">
        <h1 style={{
          fontSize: "2.2em",
          paddingBottom: "30px",
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

export default About;