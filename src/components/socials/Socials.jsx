import React from "react";
import "./socials.css";
import {
  SiLinkedin,
  SiGithub,
  // SiStackoverflow,
  SiTwitter,
  SiInstagram,
} from "react-icons/si";

const Socials = () => {
  return (
    <div className="socials-container">
      <a
        className="linkedIn"
        href="https://www.linkedin.com/in/maiz27"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLinkedin />
      </a>

      <a
        className="github"
        href="https://github.com/Maiz27"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub />
      </a>

      {/* <a
        className="stack"
        href="https://www.stackoverflow.com/users/12064543"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiStackoverflow />
      </a> */}

      <a
        className="twitter"
        href="https://www.twitter.com/_maiz27_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiTwitter />
      </a>

      <a
        className="gram"
        href="http://www.instagram.com/Maiz27"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram />
      </a>
    </div>
  );
};

export default Socials;
