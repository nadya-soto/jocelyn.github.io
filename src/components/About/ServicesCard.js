import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaBrain,
  FaCode,
  FaChartBar,
  FaRobot,
  FaDatabase,
  FaChalkboardTeacher,
} from "react-icons/fa";

function ServicesCard() {
  const services = [
    {
      icon: <FaBrain />,
      title: "Model Development",
      description: [
        "Design predictive and classification models aligned with your goals",
        "Apply ML for forecasting, anomaly detection, and optimization",
        "Fine-tune with real-world data for measurable results",
      ],
    },
    {
      icon: <FaCode />,
      title: "Data Engineering",
      description: [
        "Design and implement scalable data pipelines and infrastructure",
        "Automate workflows using tools like Airflow and Docker",
        "Prepare, validate, and version datasets for production use",
      ],
    },
    {
      icon: <FaChartBar />,
      title: "Analytics & Visualization",
      description: [
        "Uncover insights with compelling visualizations and dashboards",
        "Create interactive, clean, and KPI-aligned visuals",
        "Perform EDA to support decisions and hypothesis testing",
      ],
    },
    {
      icon: <FaRobot />,
      title: "Natural Language Processing",
      description: [
        "Build sentiment analysis tools, chatbots, and keyword extractors",
        "Integrate GPT or Whisper for generative AI tasks",
        "Apply NLP to improve communication, policy, or social understanding",
      ],
    },
    {
      icon: <FaDatabase />,
      title: "Data Strategy",
      description: [
        "Define data goals aligned with your business or impact mission",
        "Develop roadmaps for data governance and growth",
        "Ensure ethical and inclusive data use at scale",
      ],
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Training & Workshops",
      description: [
        "Custom AI and data science training for your team",
        "Interactive sessions with real-world datasets and problems",
        "Make technical knowledge accessible and actionable",
      ],
    },
  ];

  return (
    <Row
      className="align-items-center gx-5 gy-6 justify-content-center"
      style={{ padding: "30px 15px", maxWidth: 1100, margin: "auto" }}
    >
      {/* Título centrado */}
      <Col md={12} className="text-center mb-5">
        <h1 style={{ fontSize: "2.5em", color: "white",marginBottom: -30}}>
          <span className="purple">My</span> Services
        </h1>
      </Col>

      {/* Contenido textual con borde y padding más controlado */}
      <Col md={12} style={{ padding: "0 40px" }}>
        <p
          className="home-about-body"
          style={{
            fontSize: "1em",
            lineHeight: "1.8",
            textAlign: "center",
            color: "#dcdcdc",
            maxWidth: 700,
            margin: "0 auto 40px",
          }}
        >
          <p className="purple">What Can I Build For You?</p>
          <p />
          Whether you're optimizing operations, improving social outcomes, or scaling a product, I bring clarity and execution to your data challenges.
        </p>

        {/* Servicios */}
        <Row>
  {services.map((service, index) => (
    <Col md={6} key={index} className="mb-4 d-flex">
      <div
        className="p-4 rounded"
        style={{
          backgroundColor: "rgba(111, 66, 193, 0.1)",
          color: "#f8f8f8",
          border: "1px solid #6f42c1",
          flexGrow: 1,        // hace que el div llene el col
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          transition: "background-color 0.3s ease",
          cursor: "default",
          height: "100%",     // importante para que estire
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(111, 66, 193, 0.25)"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "rgba(111, 66, 193, 0.1)"}
      >
        <div style={{ fontSize: "2.5em", marginBottom: "15px" }}>
          {service.icon}
        </div>
        <h5 style={{ color: "#cfcfcf" }}>{service.title}</h5>
        {Array.isArray(service.description) ? (
          <ul
            style={{
              paddingLeft: "20px",
              fontSize: "0.95em",
              textAlign: "left",
              color: "#d0d0d0",
              marginTop: "10px",
              flexGrow: 1, // para que la lista crezca y rellene el espacio disponible
            }}
          >
            {service.description.map((item, i) => (
              <li key={i} style={{ marginBottom: "6px" }}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ fontSize: "0.9em", color: "#d0d0d0", flexGrow: 1 }}>
            {service.description}
          </p>
        )}
      </div>
    </Col>
  ))}
</Row>

      </Col>
    </Row>
  );
}

export default ServicesCard;
