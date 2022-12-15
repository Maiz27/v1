import React from 'react';
import { GoLinkExternal } from 'react-icons/go';
import './experience.css';

export const Experience = ({ myExperience }) => {
  return (
    <div className='experience-container block'>
      {myExperience.map((job) => {
        return (
          <div key={job.id} className='job'>
            <div className='job-time-location'>
              <div className='job-time'>
                <p>
                  {job.from.toDate().getMonth() + 1} /{' '}
                  {job.from.toDate().getFullYear()}
                </p>
                <p>-</p>
                {job.to ? (
                  <p>
                    {job.to.toDate().getMonth() + 1} /{' '}
                    {job.to.toDate().getFullYear()}
                  </p>
                ) : (
                  <p>Present</p>
                )}
              </div>

              <div className='job-location'>{job.location}</div>
            </div>

            <div className='job-details'>
              <h2>{job.title}</h2>
              <h3>
                {job.employer}
                {job.url && (
                  <sup>
                    <a href={job.url} target='_blank' rel='noreferrer'>
                      <GoLinkExternal />
                    </a>
                  </sup>
                )}
              </h3>

              <div>
                {job.details.map((text, id) => {
                  return <p key={id}>{`• ${text}`}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
