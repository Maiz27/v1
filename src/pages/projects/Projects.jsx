import React, { useEffect } from "react";
import img1 from "../../assets/imgs/projects/mf.png";
import img2 from "../../assets/imgs/projects/comic.png";
import img3 from "../../assets/imgs/projects/query.png";
import "./projects.css";

export const Projects = ({ setActive }) => {
  const projectsList = [
    {
      id: 1,
      title: "Medicine Finder",
      subtitle: "Flutter App",
      isComplete: true,
      img: img1,
      desc: "A searcher app for Khartoum residents, inspired by the struggles I experienced when looking for my mother's medication in Khartoum manually. The app saves users time, provides prices ranging from cheapest to most expensive and pharmacy locations as well as provide pharmacist with an easy and on the go means of managing their medicine database.",
      github: "https://github.com/Maiz27/medicine-finder",
      demo: "",
      hasDemo: false,
      hasGithub: true,
      isMobile: true,
    },
    {
      id: 2,
      title: "Comic SD",
      subtitle: "React App",
      isComplete: false,
      img: img2,
      desc: "A sudanese comic website that allows users(viewers) to view, bookmark, rate and comment on comics while also allowing admins to manage comic details. Styled with Tailwind and uses Firebase as a backend, leveraging its authentication, storage, cloud firestore and hosting.",
      github: "https://github.com/Maiz27/comic-SD",
      demo: "https://comic-website-sd.web.app",
      hasDemo: true,
      hasGithub: false,
      isMobile: false,
    },
    {
      id: 3,
      title: "Query",
      subtitle: "React App",
      isComplete: true,
      img: img3,
      desc: "A search engine using Rapid Api that shows up to date results for search, images, news and video categories. Styled using Tailwind and deployed with Firebase hosting.",
      github: "https://github.com/Maiz27/query",
      demo: "https://query-43709.web.app/",
      hasDemo: true,
      hasGithub: true,
      isMobile: false,
    },
  ];

  useEffect(() => {
    setActive("projects");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="projects-section">
      <h1>My Recent Works</h1>

      <div className="projects-container">
        {projectsList.map((project) => {
          return (
            <div className="project" key={project.id}>
              <div className="project-img-container">
                <img
                  className={project.isMobile ? "img-mobile" : "img-pc"}
                  src={project.img}
                  alt={project.title}
                />
              </div>

              <div className="project-desc">
                <h2>{project.title}</h2>
                <h3>{project.subtitle}</h3>
                <h3 className={project.isComplete ? "com" : "dev"}>
                  {project.isComplete ? "Complete" : "Underdevelopment"}
                </h3>
                <p>{project.desc}</p>

                <div className="project-btns">
                  {project.hasGithub && (
                    <a
                      className="btn"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  )}
                  {project.hasDemo && (
                    <a
                      className="btn"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
