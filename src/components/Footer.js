
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

import {
    AiFillGithub,
    AiOutlineTwitter,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center" style={{ fontWeight: 600 }}>
                    <Col sm={6}>
                    <div>Pragnya</div>
                    <p>taspragnya13@gmail.com </p>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                    <a
                href="https://github.com/Pragnya97"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
                </a>
                <a
                href="https://twitter.com/Pragnya13A"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/tappatla-pragnya/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
                    </div>
                    <p>CopyRight 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}