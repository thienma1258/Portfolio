import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiPostman,
  SiVisualstudiocode,
  SiJira,
  SiNotion,
  SiSlack
} from "react-icons/si";
import { useSelector } from "react-redux";
import { TOOLS } from "../../constant/skillSet";

var mapToolWithIcon = {
  [TOOLS.LINUX]: <SiLinux />,
  [TOOLS.POSTMAN]: <SiPostman />,
  [TOOLS.IDE]: <SiVisualstudiocode />,
  [TOOLS.JIRA]: <SiJira />,
  [TOOLS.NOTION]: <SiNotion />,
  [TOOLS.SLACK]: <SiSlack />,

};

function Toolstack() {
  const owner = useSelector((state) => state.owner);
  const tools = owner.tools || [];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {tools.map((tool,key) => (
      <Col xs={4} md={2} className="tech-icons" key={key}>
        {mapToolWithIcon[tool]}
      </Col>
    ))}
    </Row>
  );
}

export default Toolstack;
