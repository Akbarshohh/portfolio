import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rabidullayev Akbarshoh </span>
            from <span className="purple"> Karshi city, Uzbekistan.</span>
            <br />
            I am currently studying Front End programming course at IT-Park center.
            <br />
            Then I am studying English for IELTS.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Studying English
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always don't look back and always move forward!"{" "}
          </p>
          <footer className="blockquote-footer">Akbarshoh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
