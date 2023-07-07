import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LoanPrediction from "../../Assets/Projects/Loan_Prediction.jpeg";
import MazeGenerator from "../../Assets/Projects/Maze_Generator.jpeg";
import Ai_tic_tac_toe from "../../Assets/Projects/Ai_tic_tac_toe.png";
import Weather_App from "../../Assets/Projects/Weather_Application.png";
import Blog_Page from "../../Assets/Projects/Blog_Page.jpeg";
import Earth_Trippers from "../../Assets/Projects/Earth_Trippers.png";
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
              imgPath={Earth_Trippers}
              isBlog={false}
              title="Earth-Trippers"
              description="A Social Media website that allows users to create their own personal travelling experience.This website has Authentication , Pagination , Search and Filtering Capabilities , Like and Comment Section. Implemented using React, Css, JavaScript, NodeJs, ExpressJs, MongoDB, Mongoose."
              ghLink="https://github.com/Harshitha392/Earth-Trippers"
             // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ai_tic_tac_toe}
              isBlog={false}
              title="AI Based Unbeatable TIC-TAC-TOE"
              description="Designed and Developed website using HTML ,CSS , Java Script which has different versions of unbeatable AI tic-tac-toe: 3x3, 
              5x5, 7x7 and 9x9 VS AI. Implemented using the algorithms : Min – Max algorithm and Alpha-Beta Pruning , Iterative Deep search"
              ghLink="https://github.com/Harshitha392/TIC_TAC_TOE_AI"
             // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LoanPrediction}
              isBlog={false}
              title="Loan Prediction Using Machine Learning"
              description="Developed a Web Application by which we can predict whether it is safe to grant loan to a particular 
              applicant and the whole process of validation of features is automated by machine learning technology. The classification algorithm used is Logistic Regression. The backend tool used is Python Flask."
              ghLink="https://github.com/Harshitha392/Loan_prediction_using_Ml"
              //demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MazeGenerator}
              isBlog={false}
              title="Maze Generator"
              description="Developed Maze Generator Web Application in Java Script using Backtracking"
              ghLink="https://github.com/Harshitha392/Maze_Generator"
             // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog_Page}
              isBlog={false}
              title="Blog Website"
              description="Its a Website which allows users to perform CRUD Operations"
              ghLink="https://github.com/Harshitha392/Blog_page"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather_App}
              isBlog={false}
              title="Weather Application"
              description="This Weather Application allows user to find the weather details of any place"
              ghLink="https://github.com/Harshitha392/Weather_App"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;