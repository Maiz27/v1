import React from "react";
import { FaReact, FaBootstrap } from "react-icons/fa";
import {
  SiFlutter,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiDart,
  SiPython,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import "./skills.css";

export const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact />, url: "https://reactjs.org/" },
    { name: "Flutter", icon: <SiFlutter />, url: "https://flutter.dev/" },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      url: "https://tailwindcss.com/",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      url: "https://getbootstrap.com/",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      url: "https://firebase.google.com/",
    },
    { name: "Redux", icon: <SiRedux />, url: "https://redux.js.org/" },
    { name: "Dart", icon: <SiDart />, url: "https://dart.dev/" },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript />,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { name: "Python", icon: <SiPython />, url: "https://www.python.org/" },
  ];

  return (
    <div className="skills-container">
      {skills.map((skill) => {
        return (
          <a
            key={skill.name}
            className={`skill ${skill.name}`}
            href={skill.url}
            target="_blank"
            rel="noreferrer"
          >
            {skill.icon}
          </a>
        );
      })}
    </div>
  );
};
