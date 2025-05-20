import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiGit,
  DiJavascript1,
} from "react-icons/di";
import {
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiNextdotjs,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiAmazonaws,
  SiTableau,
  SiPowerbi,
  SiFlask,
  SiMlflow,
} from "react-icons/si";

function Techstack() {
  const skills = [
    { icon: <DiPython />, label: "Python" },
    { icon: <DiJavascript1 />, label: "JavaScript" },
    { icon: <DiGit />, label: "Git" },
    { icon: <SiPostgresql />, label: "PostgreSQL" },
    { icon: <SiFirebase />, label: "Firebase" },
    { icon: <SiRedis />, label: "Redis" },
    { icon: <SiTensorflow />, label: "TensorFlow" },
    { icon: <SiPytorch />, label: "PyTorch" },
    { icon: <SiAmazonaws />, label: "AWS" },
    { icon: <SiDocker />, label: "Docker" },
    { icon: <SiMlflow />, label: "MLflow" },
    { icon: <SiTableau />, label: "Tableau" },
    { icon: <SiPowerbi />, label: "Power BI" },
    { icon: <SiFlask />, label: "Flask" },
    { icon: <SiNextdotjs />, label: "Next.js" },
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
