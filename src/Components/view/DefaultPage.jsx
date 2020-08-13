import React from 'react';
import TopMenu from './topmenu';

export default function DefaultPage({ children }) {
  return (
    <div className="defaultpage">
      <TopMenu />
      {children}
    </div>
  );
}
