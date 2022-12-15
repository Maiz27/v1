import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Navbar } from './components/navBar/Navbar';
import { Header } from './components/header/Header';
import { Contact } from './components/contact/Contact';
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { Splash } from './components/splash/Splash';

import { getInfo, getExperience, getProjects } from './db/queries';
import './App.scss';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [myInfo, setMyInfo] = useState(null);
  const [myProjects, setMyProjects] = useState([]);
  const [myExperience, setMyExperience] = useState([]);

  useEffect(() => {
    getInfo().then((info) => {
      setMyInfo(info);
      getProjects().then((projects) => {
        setMyProjects(projects);
        getExperience().then((experiences) => {
          setMyExperience(experiences);
          setIsLoading(false);
        });
      });
    });
  }, []);

  const contactRef = useRef(null);
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const [myEntries, setMyEntries] = useState([]);

  useEffect(() => {
    if (contactRef.current) {
      let list = [headerRef, aboutRef, projectsRef, contactRef];
      setMyEntries(list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    const options = {
      threshold: 0.25,
    };
    const observer = new IntersectionObserver(onVisibilityChanged, options);

    myEntries.forEach((el) => observer.observe(el?.current));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myEntries]);

  const onVisibilityChanged = useCallback((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        if (entry.target.classList[1] !== 'contact') {
          entry.target.classList.remove('show');
        }
      }
    });
  }, []);

  return (
    <>
      {!isLoading && <Navbar contactRef={contactRef} />}

      <>
        {isLoading ? (
          <section>
            <Splash />
          </section>
        ) : (
          <>
            <section className='hidden' ref={headerRef}>
              <Header contactRef={contactRef} />
            </section>

            <section className='hidden about' ref={aboutRef}>
              <About
                myExperience={myExperience}
                cover={myInfo.cover}
                cv={myInfo.cv}
              />
            </section>

            <section className='hidden' ref={projectsRef}>
              <Projects myProjects={myProjects} />
            </section>

            <section ref={contactRef} className='hidden contact'>
              <Contact myInfo={myInfo} />
            </section>

            <div className='copy-right'>
              <p>
                <span id='copy'>&copy;</span>
                Copyright {new Date().getFullYear()} Maged
              </p>
            </div>
          </>
        )}
      </>
    </>
  );
};
