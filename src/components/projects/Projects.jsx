import React from 'react';
import { ProjectItem } from '../projectItem/ProjectItem';
import './projects.css';

export const Projects = ({ myProjects }) => {
  return (
    <div className='projects-section'>
      <h1>My Recent Works</h1>

      <div className='projects-container'>
        {myProjects.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              isMobile={project.isMobile}
              cover={project.cover}
              title={project.title}
              sub={project.sub}
              isComplete={project.isComplete}
              details={project.details}
              github={project.github}
              demo={project.demo}
              isActive={project.isActive}
            />
          );
        })}
      </div>
    </div>
  );
};
