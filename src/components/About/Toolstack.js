import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiDocker,
  SiGithubactions,
  SiJira,
  SiAzuredevops,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiMacos />, label: "macOS" },
    { icon: <SiVisualstudiocode />, label: "VS Code" },
    { icon: <SiPostman />, label: "Postman" },
    { icon: <SiSlack />, label: "Slack" },
    { icon: <SiVercel />, label: "Vercel" },
    { icon: <SiDocker />, label: "Docker" },
    { icon: <SiGithubactions />, label: "GitHub Actions" },
    { icon: <SiJira />, label: "Jira" },
    { icon: <SiAzuredevops />, label: "Azure DevOps" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map(({ icon, label }, idx) => (
        <Col
          key={idx}
          xs={4}
          md={2}
          className="tech-icons"
          style={{ textAlign: "center" }}
        >
          <div style={{ fontSize: "3rem" }}>{icon}</div>
          <div
            style={{
              fontSize: "0.75rem",
              marginTop: "0.3rem",
              color: "#6c757d",
            }}
          >
            {label}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
