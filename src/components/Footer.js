import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h10>Design based on Soumyajit Behera
          <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419/Portfolio"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li></h10> 
        </Col>
        <Col md="4" className="footer-copywright">
          <h5>Copyright © {year} SB</h5>
        </Col>
        </Row>
    </Container>
  );
}

export default Footer;

