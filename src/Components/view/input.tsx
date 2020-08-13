import React, {ReactElement} from 'react';
import inputformat from '../../Type/inputformat';

export default function Input({ type, className, value, readOnly }: inputformat): ReactElement {
  return (
    <input type={type} className={className} value={value} readOnly={readOnly} />
  );
}