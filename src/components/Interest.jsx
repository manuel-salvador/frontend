import React from 'react';
import '../styles/components/Interest.styl';

export default function Interest({ interests }) {
  return (
    <div className="Interest">
      <h3 className="Interest-title">Interest</h3>
      <ul>
        {interests &&
          interests.map((interest, index) => (
            <li className="Interest-item" key={`${interest}${index}`}>
              {interest}
            </li>
          ))}
      </ul>
    </div>
  );
}
