import React from 'react';
import DefaultPage from '../Components/view/DefaultPage';
import { useSelector } from 'react-redux';
import { pinsState } from '../Components/redux/storeReducer';
import DisplayPins from '../Components/displayPins';
import { numberFormat } from '../Type/numberformat';

interface Pin { value: numberFormat }

export default function Saved() {
  const pinsArray = useSelector<pinsState, pinsState["pins"]>((state) => state.pins);
  return (
    <>
      <DefaultPage>
        {pinsArray.map((pins: any) => {
          return (<p><DisplayPins numberToDisplay={pins} /></p>)
        })}
      </DefaultPage>
    </>
  );
}