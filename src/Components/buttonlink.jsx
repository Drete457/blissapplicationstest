import React from 'react';
import '../CSS/buttonlink.css';
import { Link } from 'react-router-dom';

export default function ButtonLink({ className, to, children }) {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}