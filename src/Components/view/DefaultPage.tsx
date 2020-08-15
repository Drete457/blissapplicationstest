import React from 'react';
import TopMenu from './topmenu';
import { defaultPageFormat } from '../../Type/defaultpage';

export default function DefaultPage({ children }: defaultPageFormat) {
  return (
    <>
      <div className="defaultpage">
        <TopMenu />
        {children}
      </div>
    </>
  );
}
