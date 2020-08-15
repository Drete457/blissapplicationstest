import React from 'react';
import DefaultPage from '../Components/view/DefaultPage';
import { useSelector } from 'react-redux';
import { pinsState } from '../Components/redux/storeReducer';

export default function Saved() {
  const pinsArray = useSelector<pinsState, pinsState["pins"]>((state) => state.pins)
  return (
    <>
      <DefaultPage>
       <p>elements</p>
      </DefaultPage>
    </>
  );
}