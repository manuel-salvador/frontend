import React from 'react';
import '../styles/components/About.styl';

export default function About({ profession, address, email, website, phone }) {
  return (
    <div className="About">
      <h2 className="About-title">{profession}</h2>
      <div className="About-info">
        <div className="About-item">
          <span>Phone:</span>
          <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
            {phone}
          </a>
        </div>
        <div className="About-item">
          <span>Email:</span>
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
            {email}
          </a>
        </div>
        <div className="About-item">
          <span>Website:</span>
          <a href={website} target="_blank" rel="noreferrer">
            {website}
          </a>
        </div>
        <div className="About-item">
          <span>Address:</span>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
}
