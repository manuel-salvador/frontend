import React from 'react';
import '../styles/components/Experience.styl';

export default function Experience({ experiences }) {
  return (
    <div className="Experience">
      <h3 className="Experience-title">Experience</h3>
      <ul className="Experience-list">
        {experiences &&
          experiences.map((experience, index) => (
            <li
              className="Experience-item"
              key={`${experience.jobTitle}${experience.company}${index}`}
            >
              <div className="Experience-item-header">
                <div>
                  <p className="Experience-item-header-title">
                    {experience.jobTitle}
                  </p>
                  <p>{experience.company}</p>
                </div>
                <span>
                  {experience.startDate} - {experience.endDate}
                </span>
              </div>
              <p>{experience.jobDescription}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
