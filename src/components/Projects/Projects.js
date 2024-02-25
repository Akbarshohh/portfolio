import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/2.png";
import emotion from "../../Assets/Projects/3.png";
import editor from "../../Assets/Projects/32714-6-apple-computer.png";
import chatify from "../../Assets/Projects/4.png";
import suicide from "../../Assets/Projects/5.png";
import bitsOfCode from "../../Assets/Projects/6.png";

function Projects() {
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Music App"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis impedit quos, maxime suscipit maiores distinctio optio, magni facilis similique ullam architecto autem. Neque facere quae dolorum maiores eligendi sapiente ex consequatur excepturi nostrum quisquam nisi unde voluptatibus provident nobis."
              ghLink="https://github.com/Akbarshohh/music"
              demoLink="https://akbarmusicapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Movie App"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis impedit quos, maxime suscipit maiores distinctio optio, magni facilis similique ullam architecto autem. Neque facere quae dolorum maiores eligendi sapiente ex consequatur excepturi nostrum quisquam nisi unde voluptatibus provident nobis."
              ghLink="https://github.com/Akbarshohh/movie_db"
              demoLink="https://moviemyapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Personal Shop"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis impedit quos, maxime suscipit maiores distinctio optio, magni facilis similique ullam architecto autem. Neque facere quae dolorum maiores eligendi sapiente ex consequatur excepturi nostrum quisquam nisi unde voluptatibus provident nobis."
              ghLink="https://github.com/Akbarshohh/responsive_shop"
              demoLink="https://responsiveshop.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Dashboard App"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis impedit quos, maxime suscipit maiores distinctio optio, magni facilis similique ullam architecto autem. Neque facere quae dolorum maiores eligendi sapiente ex consequatur excepturi nostrum quisquam nisi unde voluptatibus provident nobis."
              ghLink="https://github.com/Akbarshohh/dashboard"
              demoLink="https://fakedashboard.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Dashboard 2 App"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis impedit quos, maxime suscipit maiores distinctio optio, magni facilis similique ullam architecto autem. Neque facere quae dolorum maiores eligendi sapiente ex consequatur excepturi nostrum quisquam nisi unde voluptatibus provident nobis."
              ghLink="https://github.com/Akbarshohh/dashboard2"
              demoLink="https://mydashboard2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Translator App"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis impedit quos, maxime suscipit maiores distinctio optio, magni facilis similique ullam architecto autem. Neque facere quae dolorum maiores eligendi sapiente ex consequatur excepturi nostrum quisquam nisi unde voluptatibus provident nobis."
              ghLink="https://github.com/Akbarshohh/translator"
              demoLink="https://translatororg.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
