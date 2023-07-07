import React from "react";
import GitHubCalendar from "react-github-calendar";
//import { Container, Row } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import "./styles.css";
function Github() {
  return (
    <Container>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <h1 className="link" href="https://github.com/Harshitha392">Github</h1>
      <GitHubCalendar
        username="Harshitha392"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
    <Row>
    <Col md={12} className="home-about-social">
    <h1>Check out my Coding Profiles</h1>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://leetcode.com/harshitha_0595/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            LeetCode
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://codeforces.com/profile/harshitha_majety"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Codeforces
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.codechef.com/users/harshitha_0595"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Codechef
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.hackerrank.com/595_harshitha?hr_r=1"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Hackerrank
          </a>
        </li>
      </ul>
    </Col>
  </Row>
  </Container>
  );
}

export default Github;