import React, { useEffect, useState } from "react";
import { AnimatedLetters } from "../../components/animatedLetters/AnimatedLetters";
import { Socials } from "../socials/Socials";
import "./header.css";

export const Header = ({ contactRef }) => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [
    "M",
    "a",
    "g",
    "e",
    "d",
    " ",
    "F",
    "a",
    "i",
    "z",
    " ",
    "I",
    "s",
    "m",
    "a",
    "i",
    "l",
  ];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4800);
  }, []);

  return (
    <div className="header-container">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _11`}>i,</span>
          <br />
          <span className={`${letterClass} _12`}>I</span>
          <span className={`${letterClass} _13`}>'m</span>
          &nbsp;
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={14}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={27}
          />
        </h1>

        <h2>React Developer / Flutter Developer</h2>

        <Socials />

        <button
          onClick={() =>
            contactRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            })
          }
          className="btn text-animate _47"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};
