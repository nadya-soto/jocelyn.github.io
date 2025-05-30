import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <Container fluid className="footer" style={{
      backgroundColor: "#1a1a2e",
      color: "#f0f0f0",
      padding: "2rem 0",
      marginTop: "3rem"
    }}>
      <Row className="justify-content-center align-items-center">
      
        {/* Copyright */}
        <Col md={4} className="text-center">
          <h5 style={{
            margin: 0,
            fontSize: "1rem",
            fontWeight: 400,
            color: "black"
          }}>
            Copyright © {year} Jocelyn Soto
          </h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;