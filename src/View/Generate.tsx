import React, { useState, useEffect } from 'react';
import randomizer from '../Components/random/randomizer';
import DefaultPage from '../Components/view/DefaultPage';
import Button from '../Components/buttons/button';
import { useDispatch, useSelector } from 'react-redux';
import { addPins } from '../Components/redux/actions';
import { pinsState } from '../Components/redux/storeReducer';
import { numberFormat } from '../Type/numberformat';
import DisplayPins from '../Components/displayPins';

function generateRandomNumbers(set: any, numberToDisplay: numberFormat): void {
  set(() => randomizer(numberToDisplay));
}

export default function Generate() {
  const pinsArray = useSelector<pinsState, pinsState["pins"]>((state) => state.pins);
  const [numberToDisplay, setNumberToDisplay]: any[] = useState({});

  //pass the action to the button save
  const dispatch = useDispatch();
  const onAddPins = (pins: object) => {
    dispatch(addPins(pins))
  }

  useEffect(() => {
    setNumberToDisplay(pinsArray[0])
  }, [pinsArray])

  return (
    <>
      <DefaultPage>
        {<DisplayPins numberToDisplay={numberToDisplay} />}
        <br />
        <Button className="buttongenerate" onClick={() => { generateRandomNumbers(setNumberToDisplay, numberToDisplay) }}>GENERATE</Button>
        <Button className="buttonsave" onClick={() => { }}>SAVE</Button>
      </DefaultPage>
    </>
  );
}

