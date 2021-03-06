import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";


import {useSelector} from "react-redux"

var myImg = "./avatar.svg";

function Home2() {
  const owner = useSelector((state)=>state.owner)

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" >
          <span dangerouslySetInnerHTML={{__html:owner.introduceHTML}} />

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
