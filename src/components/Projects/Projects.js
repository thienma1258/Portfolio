import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import { useSelector } from "react-redux";

function Projects() {
var projects = useSelector((state) => state.project);
var items = projects.items || [];
var colPerRow = projects.itemPerRow || 2;
var md = 12 / colPerRow;
var rows = items.length / colPerRow;
if (items.length % colPerRow > 0) {
  rows++;
}
var rowCard = [];
for (var i = 0; i < rows; i++) {
  let itemRender = items.slice(i*colPerRow,(i+1)*colPerRow)
  rowCard.push(
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {itemRender.map((item) => (
      <Col md={md} className="project-card">
       <ProjectCard
         imgPath={item.imageURL}
         isBlog={item.isBlog}
         title={item.title}
         description={item.description}
         link={item.link}
       />
     </Col>
      ))}
    </Row>
  );
}



  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {rowCard}
      </Container>
    </Container>
  );
}

export default Projects;
