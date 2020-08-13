import React from 'react';
import TopMenu from '../Components/topmenu';

export default function DefaultPage({ children }) {
  return (
    <div className="defaultpage">
      <TopMenu />
      {children}
    </div>
  );
}
