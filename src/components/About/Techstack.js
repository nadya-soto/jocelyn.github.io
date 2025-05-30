import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiGit,
  DiJavascript1,
} from "react-icons/di";
import {
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiAmazonaws,
  SiTableau,
  SiPowerbi,
  SiFlask,
  SiMlflow,
  SiR,
  SiMicrosoftazure,
} from "react-icons/si";

function Techstack() {
  
  const skills = [
    // Lenguajes y versionamiento
    { icon: <DiPython />, label: "Python" },
    { icon: <SiR />, label: "R" },
    { icon: <DiJavascript1 />, label: "JavaScript" },
    { icon: <DiGit />, label: "Git" },

    // Bases de datos
    { icon: <SiPostgresql />, label: "SQL / PostgreSQL" },

    // Machine Learning / Deep Learning
    { icon: <SiTensorflow />, label: "TensorFlow" },
    { icon: <SiPytorch />, label: "PyTorch" },
    { icon: <SiMlflow />, label: "MLflow" },

    // Cloud y MLOps
    { icon: <SiAmazonaws />, label: "AWS" },
    { icon: <SiMicrosoftazure />, label: "Azure ML" },
    { icon: <SiDocker />, label: "Docker" },

    // Visualización y reporting
    { icon: <SiTableau />, label: "Tableau" },
    { icon: <SiPowerbi />, label: "Power BI" },

    // App development
    { icon: <SiFlask />, label: "Flask" },
  ];

  return (
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map(({ icon, label }, idx) => (
        <Col
          key={idx}
          xs={4}
          md={2}
          className="tech-icons"
          style={{ textAlign: "center" }}
        >
          <div style={{ fontSize: "3rem" }}>{icon}</div>
          <div style={{ fontSize: "0.75rem", marginTop: "0.3rem", color: "#6c757d" }}>
            {label}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
