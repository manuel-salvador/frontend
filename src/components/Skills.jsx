import React from 'react';
import '../styles/components/Skills.styl';

export default function Skills({ skills }) {
  return (
    <div className="Skills">
      <h3 className="Skills-title">Skills</h3>
      <ul>
        {skills &&
          skills.map((skill, index) => (
            <li
              className="Skills-item"
              key={`${skill.name}${skill.percentage}${index}`}
            >
              <p>{skill.name}</p>
              <p>{skill.percentage}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
