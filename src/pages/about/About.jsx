import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Socials from "../../components/socials/Socials";
import IMG from "../../assets/imgs/me2.jpg";
import CV from "../../assets/Maged's Resume.pdf";
import "./about.css";

export const About = ({ setActive }) => {
  const location = useLocation();
  const [current, setCurrent] = useState("skills");

  useEffect(() => {
    setActive("about");
    setCurrent(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div className="about-container">
        <div className="pic-container">
          <img loading="eager" src={IMG} alt="Maged" />
        </div>

        <div className="about-text">
          <div className="about-header">
            <h1 className="title">About Me</h1>
          </div>
          <p>
            I'm Maged, a recent graduate on the lookout for new opportunities to
            learn and grow as both a person and a developer, I enjoy building
            web apps and learning new technologies or which ever new born
            JavaScript framework because there's always a new one!
            <br />
            <br />I spend my free time with family and friends, listening to
            music or playing games
          </p>

          <a href={CV} download="Maged's Resume.pdf" className="btn">
            Download CV
          </a>
        </div>
      </div>

      <div className="center">
        <Socials />
      </div>

      <div className="menu">
        <Link
          to="skills"
          onClick={() => setCurrent("/about/skills")}
          className={
            current === "/about/skills" ? "menu-item menu-active" : "menu-item"
          }
        >
          Skill Set
        </Link>
        <Link
          to="experience"
          onClick={() => setCurrent("/about/experience")}
          className={
            current === "/about/experience"
              ? "menu-item menu-active"
              : "menu-item"
          }
        >
          Experience
        </Link>
        <Link
          to="education"
          onClick={() => setCurrent("/about/education")}
          className={
            current === "/about/education"
              ? "menu-item menu-active"
              : "menu-item"
          }
        >
          Education
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </section>
  );
};
