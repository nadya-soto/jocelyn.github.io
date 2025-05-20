import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";  // Importa el icono de email

import { useInView } from "react-intersection-observer";

function ServicesCard() {
  // Detectar visibilidad del título
  const { ref: titleRef, inView: titleVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Detectar visibilidad columna izquierda
  const { ref: leftRef, inView: leftVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Detectar visibilidad columna derecha
  const { ref: rightRef, inView: rightVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInStyle = (visible, delay = "0s") => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s ease-out ${delay}, transform 0.6s ease-out ${delay}`,
  });

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <h1
          ref={titleRef}
          style={{
            fontSize: "2.1em",
            paddingBottom: "20px",
            marginTop: "4rem", // más espacio arriba
            ...fadeInStyle(titleVisible),
          }}
        >
          <strong className="purple">What I Can Do</strong> For You
        </h1>

        <Row>
          {/* Columna izquierda: redes sociales y mensaje */}
          <Col
            md={5}
            ref={leftRef}
            style={{
              borderRight: "1px solid #ccc",
              paddingRight: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // centrado vertical en la columna
              ...fadeInStyle(leftVisible, "0.3s"),
            }}
          >
            <div
              style={{
                marginBottom: "1rem",
                fontSize: "1.25rem",
                fontStyle: "italic",
              }}
            >
              Need something unique? I can design a custom solution tailored to your project's goals.
            </div>

            <div className="home-about-social">
              <p>
                Let's connect and create something amazing together.
              </p>
              <h3>FIND ME ON</h3>
              
              <ul
                className="home-about-social-links"
                style={{
                  listStyleType: "none",
                  paddingLeft: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <li className="social-icons">
                  <a
                    href="https://github.com/nadya-soto"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons purple"
                    style={{ fontSize: "4rem" }}
                  >
                    <AiFillGithub />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/nadya-soto/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons purple"
                    style={{ fontSize: "2rem" }}
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                
                {/* Nuevo elemento para email sin link y con espacio arriba */}
                <li
                  className="social-icons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "1.5rem",
                    marginTop: "1rem", // espacio arriba
                  }}
                >
                  <MdEmail style={{ color: "#6f42c1" }} />
                  <span style={{ color: "#6f42c1", fontSize: "1rem" }}>
                    nadyasoto@icloud.com
                  </span>
                </li>
              </ul>
            </div>
          </Col>

          {/* Columna derecha: listado de servicios */}
          <Col
            md={6}
            ref={rightRef}
            style={{
              paddingLeft: "5rem",
              ...fadeInStyle(rightVisible, "0.6s"),
            }}
          >
            {/* Model Development */}
            <div>
              <h4 style={{ fontSize: "1rem", textAlign: "justify" }}>
                <strong className="purple">Model Development</strong>
              </h4>
              <ul style={{ fontSize: "1rem", textAlign: "justify" }}>
                <li>Build predictive and classification models tailored to your business needs</li>
                <li>Apply advanced ML techniques for forecasting, anomaly detection, and optimization</li>
              </ul>
            </div>

            {/* Natural Language Processing */}
            <div>
              <h4 style={{ fontSize: "1rem", textAlign: "justify" }}>
                <strong className="purple">Natural Language Processing</strong>
              </h4>
              <ul style={{ fontSize: "1rem", textAlign: "justify" }}>
                <li>Develop custom NLP solutions like sentiment analysis, chatbots, keyword extraction</li>
                <li>Integrate generative AI to boost communication tools and automate content</li>
              </ul>
            </div>

            {/* Data Engineering */}
            <div>
              <h4 style={{ fontSize: "1rem", textAlign: "justify" }}>
                <strong className="purple">Data Engineering</strong>
              </h4>
              <ul style={{ fontSize: "1rem", textAlign: "justify" }}>
                <li>Design and automate data pipelines using modern MLOps tools</li>
                <li>Annotate and curate datasets for high-quality model training</li>
              </ul>
            </div>

            {/* Deployment & Strategy */}
            <div>
              <h4 style={{ fontSize: "1rem", textAlign: "justify" }}>
                <strong className="purple">Deployment & Strategy</strong>
              </h4>
              <ul style={{ fontSize: "1rem", textAlign: "justify" }}>
                <li>Create interactive dashboards and data visualizations for real-time, actionable insights</li>
                <li>Deploy scalable AI solutions on Azure, AWS, or GCP</li>
                <li>Offer strategic consulting to maximize impact and guide project success</li>
              </ul>
            </div>

            {/* Data Analysis */}
            <div>
              <h4 style={{ fontSize: "1rem", textAlign: "justify" }}>
                <strong className="purple">Data Analysis</strong>
              </h4>
              <ul style={{ fontSize: "1rem", textAlign: "justify" }}>
                <li>Perform exploratory data analysis (EDA) to uncover trends, patterns, and outliers</li>
                <li>Conduct statistical analyses to support data-driven decisions and hypothesis testing</li>
                <li>Identify key performance indicators (KPIs) and develop metrics to track business goals</li>
              </ul>
            </div>

            {/* Experimentation & Decision Science */}
            <div>
              <h4 style={{ fontSize: "1rem", textAlign: "justify" }}>
                <strong className="purple">Experimentation & Decision Science</strong>
              </h4>
              <ul style={{ fontSize: "1rem", textAlign: "justify" }}>
                <li>Design and evaluate A/B tests and controlled experiments to guide product and policy decisions</li>
                <li>Apply causal inference techniques to uncover drivers behind user behavior or business outcomes</li>
              </ul>
            </div>

            {/* Data Storytelling & Insight Communication */}
            <div>
              <h4 style={{ fontSize: "1rem", textAlign: "justify" }}>
                <strong className="purple">Data Storytelling & Insight Communication</strong>
              </h4>
              <ul style={{ fontSize: "1rem", textAlign: "justify" }}>
                <li>Translate complex findings into clear visual narratives and business recommendations</li>
                <li>Develop custom reports and slide decks to present insights to stakeholders or clients</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ServicesCard;
