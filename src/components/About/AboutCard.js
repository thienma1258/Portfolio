import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  var descriptionAbout = "I am a Backend engineer in NAB studio"
  var name = "Ngoc Dong Pham"
  var activites  = ["Playing Games"," Writting Tech Blogs","Playing football","Research new technology"]

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{name} </span>
            from <span className="purple"> TPHCM, Vietnam.</span>
            <br />{descriptionAbout}
            <br />
            <br />  
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          {activites.map(name => (  
          <li className="about-activity">   
                         <ImPointRight /> {name}  
          </li>  
        ))}  
           
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "I can make thing that better for users!"{" "}
          </p>
          <footer className="blockquote-footer">{name}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
