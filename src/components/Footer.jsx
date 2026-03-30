import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center footer-content">
          <Col size={12} sm={6} className="footer-left">
            <div className="footer-brand">
              <h3 className="footer-name">Shuaib Ahmad</h3>
              <p className="footer-title">Data Analyst</p>
              <p className="footer-description">
                Transforming data into meaningful insights with precision and impact
              </p>
            </div>
          </Col>
          <Col size={12} sm={6} className="footer-right text-center text-sm-end">
            <div className="social-icons-footer">
              <a 
                href="https://linkedin.com/in/-shuaib-ahmad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link linkedin"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn />
                <span className="icon-label">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/shuaibahmad00/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link github"
                aria-label="GitHub Profile"
              >
                <FaGithub />
                <span className="icon-label">GitHub</span>
              </a>
              <a 
                href="mailto:shuaibahmad7380@gmail.com"
                className="social-icon-link email"
                aria-label="Send Email"
              >
                <FaEnvelope />
                <span className="icon-label">Email</span>
              </a>
            </div>
            <div className="footer-copyright">
              <p>
                Made with <FaHeart className="heart-icon" /> by Shuaib Ahmad
              </p>
              <p className="copyright-text">
                Copyright © 2026. All Rights Reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}