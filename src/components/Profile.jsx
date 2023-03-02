import React from 'react';
import '../styles/components/Profile.styl';

export default function Profile({ profile }) {
  return (
    <div className="Profile">
      <h3 className="Profile-title">About me</h3>
      <p className="Profile-desc">{profile}</p>
    </div>
  );
}
