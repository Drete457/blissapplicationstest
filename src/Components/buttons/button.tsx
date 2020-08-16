import React, { ReactElement } from 'react';
import { buttonFormat } from '../../Type/buttonformat';

export default function Button({ className, children, onClick }: buttonFormat): ReactElement {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};