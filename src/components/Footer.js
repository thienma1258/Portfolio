import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useSelector } from "react-redux";
import {GREAT_QUOTES} from "../config/config"
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  let owner = useSelector((state) => state.owner);
  let quotes = GREAT_QUOTES || []; 
  let pickQuotes = quotes[Math.floor(Math.random() * quotes.length)];

  var social = owner.social || {
    github: "",
    twitter: "",
    linkedin: "",
    facebook: "",
  };
  return (
    <Container fluid className="footer">
      <Row>
        <Col xs={8}></Col>
        <Col xs={4}>
          <div className="float-md-right">
            <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
             {pickQuotes.quote || ""}
            </p>
            <br />
            <footer className="blockquote-footer">   {pickQuotes.author || ""}</footer>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            Developed by {owner.fullName}({owner.phoneNumber})
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>
            Copyright © {year} {owner.userName}
          </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={social.github}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={social.facebook}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={social.linkedin}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={social.twitter}
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
