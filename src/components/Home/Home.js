import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import GetInTouchSection  from "../Contact/Contact";
import SocialSection  from "../Contact/Social";

import {useSelector} from "react-redux"

const Home = ({ data, actions }) => {
 
  const owner = useSelector((state)=>state.owner)
  // const state = useSelector(state)
  return (
    <section>

      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M <br />
                <strong className="main-name" style={{ fontSize: "1em" }} >
                  {owner.fullName}
                </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img id="bg-image" src={homeLogo} alt="home pic"  />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <GetInTouchSection/>
      <SocialSection/>
    </section>
  );
};

export default React.memo(Home);
