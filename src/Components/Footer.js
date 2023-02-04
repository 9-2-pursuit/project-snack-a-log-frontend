import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import MyPhoto from "../assets/fotoPersonal.jpg"
import PhotoHector from "../assets/fotoHector.png";
// import "./Footer.css";

const Footer = () => {
    return (
      <div
        style={{
          "--cc": "0",
          //   "--cc-sm": "2",
          "--cc-xl": "0",
          "--cg": "0 rem",
          // ESTE ES EL BACKGROUND
          "--bg": "#4A69BD",
          "--p": "1.5rem",
          "--pos": "relative",
        }}
      >
        <footer className="bg-dark text-white py-5">
          <Container>
            <p
              style={{
                margin: "10px 10px",
                color: "white",
                fontSize: "16px",
                fontWeight: "normal",
                fontStyle: "italic",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Hire one of our developers for your next project:
              
            </p>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Col xs={6} sm={4}>
                <a href="https://github.com/danielsolaque">
                  <Image
                    src={MyPhoto}
                    roundedCircle
                    className="footer-image"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "25px",
                      overflow: "hidden",
                      marginRight: "1rem",
                    }}
                  />
                </a>
              </Col>
              <Col xs={6} sm={4}>
                <a href="https://github.com/hector918">
                  <Image
                    src={PhotoHector}
                    roundedCircle
                    className="footer-image"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "25px",
                      overflow: "hidden",
                      marginRight: "1rem",
                    }}
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
};

export default Footer;
