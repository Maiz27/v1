import React, { useState } from 'react';
import { Education } from '../education/Education';
import { Experience } from '../experience/Experience';
import { Skills } from '../skills/Skills';
import './about.css';

export const About = ({ myExperience, cover, cv }) => {
  const [current, setCurrent] = useState('skills');

  return (
    <>
      <div className='about-container'>
        <div className='pic-container'>
          <img loading='lazy' src={cover} alt='Maged' />
        </div>

        <div className='about-text'>
          <div className='about-header'>
            <h1 className='title'>About Me</h1>
          </div>
          <p>
            I'm Maged, a recent graduate on the lookout for new opportunities to
            learn and grow as both a person and a developer, I enjoy building
            web apps and learning new technologies or which ever new born
            JavaScript framework because there's always a new one!
            <br />
            <br />I spend my free time with family and friends, listening to
            music or playing games.
          </p>

          <a href={cv} download="Maged's Resume.pdf" className='btn'>
            Download CV
          </a>
        </div>
      </div>

      <div className='menu'>
        <div
          onClick={() => setCurrent('skills')}
          className={
            current === 'skills' ? 'menu-item menu-active' : 'menu-item'
          }
        >
          Skill Set
        </div>
        <div
          onClick={() => setCurrent('experience')}
          className={
            current === 'experience' ? 'menu-item menu-active' : 'menu-item'
          }
        >
          Experience
        </div>
        <div
          onClick={() => setCurrent('education')}
          className={
            current === 'education' ? 'menu-item menu-active' : 'menu-item'
          }
        >
          Education
        </div>
      </div>

      <div>
        {current === 'skills' && <Skills />}
        {current === 'experience' && <Experience myExperience={myExperience} />}
        {current === 'education' && <Education />}
      </div>
    </>
  );
};
