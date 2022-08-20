import React from "react";
import { GoLinkExternal } from "react-icons/go";
import "./experience.css";

export const Experience = () => {
  const list = [
    {
      id: 1,
      title: "Teaching Assistant",
      employer: "Future University",
      employerUrl: "https://fu.edu.sd",
      from: new Date("2022/05/01"),
      to: null,
      isCurrent: true,
      location: "Khartoum, Sudan",
      desc: "Assisted students in turning their ideas into feasible projects which resulted in several projects that would work in the real world. Improved students’ knowledge about Time Complexity in Algorithms Analysis and Design lab which allowed them to better analyze their code and strive for efficiency.",
    },
  ];

  return (
    <div className="experience-container">
      {list.map((job) => {
        return (
          <div key={job.id} className="job">
            <div className="job-time-location">
              <div className="job-time">
                <p>
                  {job.from.getMonth() + 1}/{job.from.getFullYear()}
                </p>
                <p>-</p>
                <p>{job.to || "Present"}</p>
              </div>

              <div className="job-location">{job.location}</div>
            </div>

            <div className="job-details">
              <h2>{job.title}</h2>
              <h3>
                {job.employer}
                <sup>
                  <a href={job.employerUrl} target="_blank" rel="noreferrer">
                    <GoLinkExternal />
                  </a>
                </sup>
              </h3>

              <p>{job.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
