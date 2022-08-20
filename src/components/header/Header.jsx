import React from "react";
import { AnimatedLetters } from "../../components/animatedLetters/AnimatedLetters";
import img from "../../assets/imgs/home.gif";
import "./header.css";

export const Header = ({ letterClass, contactRef }) => {
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

  return (
    <div className="header-container">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          &nbsp;
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={32}
          />
        </h1>

        <h2>React Developer / Flutter Developer</h2>

        <button
          onClick={() =>
            contactRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            })
          }
          className="btn text-animate _44"
        >
          Contact Me
        </button>
      </div>

      <img src={img} alt="svg" className="gif" />
    </div>
  );
};
