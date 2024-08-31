
import projImg1 from "../assets/img/image1.png";
import frigg from "../assets/img/Frigg.png";
import file from "../assets/img/file.png";
import projImg2 from "../assets/img/image2.png";
import projImg3 from "../assets/img/image3.png";
import atm from "../assets/img/atm.png";
import portfolio from "../assets/img/Portfolio.png";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


export const Projects = () =>  {
  return (
    <section id="projects">
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          My Featured <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white"}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projImg1}
              isBlog={false}
              title="Credit Risk Assessment"
              description="Developed and implemented credit risk assessment algorithms using data analysis techniques. Gathered, cleaned, and processed diverse data sources for analysis. Implemented and validated models using machine learning techniques."
              ghLink="https://github.com/Pragnya97/Credit-Risk-Assessment"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projImg2}
              isBlog={false}
              title="FoodConnect"
              description="A cutting-edge smart web application to bridge the gap between home cooks and consumers, revolutionizing the way people access and enjoy homemade meals, fostering local food culture, supporting small-scale food entrepreneurs. Designed and Implemented using React and Spring Boot frameworks."
              ghLink="https://github.com/Pragnya97/FoodConnect"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frigg}
              isBlog={false}
              title="Frigg"
              description="Mobile application aimed at assisting users in tracking grocery and food items within their fridge. Designed and Implemented using Android to build seamless user-interface for the feature like fridge list for enabling users to easily monitor the inventory of food items."
              ghLink="https://github.com/Pragnya97/Frigg"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atm}
              isBlog={false}
              title="ATM System"
              description="This project involves the development of a simulated Automated Teller Machine (ATM) system that securely manages user bank accounts. The ATM allows users to perform essential banking functions, including making deposits, withdrawing money, and viewing their account balance."
              ghLink="https://github.com/Pragnya97/ATM-System"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={file}
              isBlog={false}
              title="File Management System"
              description="This project is a file management and retrieval system that involves a client-server architecture with load balancing through a mirror server. The client can send various commands to the server to search for files, retrieve files based on size or date, and handle file extensions."
              ghLink="https://github.com/Pragnya97/File-Management-and-Retrieval-System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="Welcome to my personal portfolio, where I showcase my journey as a software developer. Here you'll find a selection of my projects, skills, and experiences that highlight my expertise in software development, problem-solving, and innovation. Explore my work, and feel free to connect with me for collaboration or opportunities."
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

