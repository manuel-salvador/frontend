import React from 'react';
import '../styles/components/Academic.styl';

export default function Academic({ academics }) {
  return (
    <div className="Academic">
      <h3 className="Academic-title">Academic</h3>
      <ul>
        {academics &&
          academics.map((academic, index) => (
            <li
              className="Academic-item"
              key={`${academic.institution}${academic.degree}${index}`}
            >
              <div className="Academic-item-header">
                <div>
                  <p className="Academic-item-header-title">
                    {academic.institution}
                  </p>
                  <p>{academic.degree}</p>
                </div>
                <span>
                  {academic.startDate} - {academic.endDate}
                </span>
              </div>
              <p>{academic.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
