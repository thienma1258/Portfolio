import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useSelector } from "react-redux";

function AboutCard() {
  const owner = useSelector((state) => state.owner);
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{owner.fullName} </span>
            from <span className="purple"> TPHCM, Vietnam.</span>
            <br />
            {owner.about}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {owner.hobbits.map((name) => (
              <li key={name} className="about-activity">
                <ImPointRight /> {name}
              </li>
            ))}
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "I can make product used by mililons of users!"
          </p>
          <br/>
          <footer className="blockquote-footer">{owner.fullName}</footer>
          <br/>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
