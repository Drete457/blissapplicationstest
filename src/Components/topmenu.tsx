/* eslint-disable linebreak-style */
import React, { ReactChild } from 'react';
import '../CSS/topmenu.css';
import ButtonLink from '../Components/buttonlink';

export default function TopMenu(): ReactChild {
  return (
    <nav className="NavBar">
      <ButtonLink className="ButtonLink" to="/">Generate</ButtonLink>
      <ButtonLink className="ButtonLink" to="/saved">Saved</ButtonLink>
    </nav>
  );
}