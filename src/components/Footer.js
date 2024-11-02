import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMobile,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaMobile, FaPhone } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>

        <Col md="4" className="footer-body">

          <span style={{color: 'Purple',fontWeight: 'bold',fontSize: '1em',fontFamily: 'Optima, sans-serif',
              letterSpacing: '1px',textTransform: 'none'}}>
            Contact Me - {" "}
          </span>
          <a href="mailto:maheshchoudhary67894@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
            <AiOutlineMail style={{ verticalAlign: 'middle', marginRight: '0.5rem', color:"aqua"}} />
            <span style={{ color: 'aqua' }}>Email</span>
          </a>

          <span style={{ color: 'purple', margin: '0 0.5rem' }}>|</span>
          <a href="tel:+917878397295" style={{ textDecoration: 'none', color: 'inherit' }}>
            <FaMobile style={{ verticalAlign: 'middle', marginRight: '0.5rem' , color:"aqua"}} />
            <span style={{ color: 'aqua' }}>Mobile</span>
          </a>
        </Col>
        

        {/*
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        */}
        <Col md="4" className="footer-body">

          

          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Mahesh1choudhary"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            {/*
            <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            */}

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mahesh-choudhary-53b185229/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/mahesh_choudhary.01/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
