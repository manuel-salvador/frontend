import React from 'react';
import '../styles/components/Header.styl';

export default function Header({ avatar, children, name }) {
  return (
    <header className="Header">
      <img
        className="Header-profile"
        src={avatar}
        width={160}
        alt="Profile picture"
      />
      <div className="Header-about">
        <h1 className="Header-title">{name}</h1>
        {children}
      </div>
    </header>
  );
}
