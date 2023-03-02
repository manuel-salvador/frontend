import React from 'react';
import '../styles/components/Languages.styl';

export default function Languages({ languages }) {
  return (
    <div className="Languages">
      <h3 className="Languages-title">Languages</h3>
      <ul>
        {languages &&
          languages.map((lang, index) => (
            <li
              className="Languages-item"
              key={`${lang.name}${lang.percentage}${index}`}
            >
              <p>{lang.name}</p>
              <p>{lang.percentage}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
