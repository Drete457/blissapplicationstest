import React, { ReactElement } from 'react';
import '../CSS/buttonlink.css';
import { Link } from 'react-router-dom';
import buttonLinkFormat from '../Type/buttonlinkformat';

export default function ButtonLink({ className, to, children }: buttonLinkFormat  ): ReactElement {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}