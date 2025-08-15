import React from 'react';
import './CornerLogo.css';
import logo from '../assets/6.png';

export default function CornerLogo() {
  return (
    <a href="/" className="corner-logo" aria-label="Go to home">
      <img src={logo} alt="Catalyst logo" />
    </a>
  );
}
