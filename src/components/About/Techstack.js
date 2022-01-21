import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGo,
  DiMysql,
  DiJava,
  DiRedis,
} from "react-icons/di";
import {

  SiAmazonaws,
} from "react-icons/si";
import { SKILL_SET } from "../../constant/skillSet";
import { useSelector } from "react-redux";

var mapStackWithIcon = {
  [SKILL_SET.CPlusPlus]: <CgCPlusPlus />,
  [SKILL_SET.AWS]: <SiAmazonaws />,
  [SKILL_SET.GOLANG]: <DiGo />,
  [SKILL_SET.JAVASCRIPT]: <DiJavascript1 />,
  [SKILL_SET.MONGODB]: <DiMongodb />,
  [SKILL_SET.NODE]: <DiNodejs />,
  [SKILL_SET.MYSQL]: <DiMysql />,
  [SKILL_SET.PYTHON]: <DiPython />,
  [SKILL_SET.JAVA]: <DiJava />,
  [SKILL_SET.REDIS]: <DiRedis />,

};

function Techstack() {
  const owner = useSelector((state) => state.owner);
  const skillSet = owner.skillSet || [];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skillSet.map((skill,index) => (
        <Col xs={4} md={2} className="tech-icons" key={index  }>
          {mapStackWithIcon[skill]}
        </Col>
      ))}

    </Row>
  );
}

export default Techstack;
