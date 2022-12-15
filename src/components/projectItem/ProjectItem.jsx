import React, { useRef, useEffect, useCallback } from 'react';

export const ProjectItem = ({
  isMobile,
  cover,
  title,
  sub,
  isComplete,
  details,
  github,
  demo,
  isActive,
}) => {
  const projectRef = useRef(null);

  useEffect(() => {
    if (!projectRef?.current) return;
    const options = {
      threshold: 0.4,
    };
    const observer = new IntersectionObserver(onVisibilityChanged, options);

    observer.observe(projectRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onVisibilityChanged = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  }, []);

  return (
    isActive && (
      <div ref={projectRef} className='project hidden'>
        <div className='project-img-container'>
          <img
            className={isMobile ? 'img-mobile' : 'img-pc'}
            src={cover}
            alt={title}
            loading='lazy'
          />
        </div>

        <div className='project-desc'>
          <h2>{title}</h2>
          <h3>{sub}</h3>
          <h3 className={isComplete ? 'com' : 'dev'}>
            {isComplete ? 'Complete' : 'Under-development'}
          </h3>
          <p>{details}</p>

          <div className='project-btns'>
            {github && (
              <a className='btn' href={github} target='_blank' rel='noreferrer'>
                Github
              </a>
            )}
            {demo && (
              <a className='btn' href={demo} target='_blank' rel='noreferrer'>
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    )
  );
};
