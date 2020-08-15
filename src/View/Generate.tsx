import React, { useState, useEffect } from 'react';
import randomizer from '../Components/random/randomizer';
import DefaultPage from '../Components/view/DefaultPage';
import Button from '../Components/buttons/button';
import { useDispatch } from 'react-redux';
import { addPins } from '../Components/redux/actions';
import { numberFormat } from '../Type/numberformat';
import DisplayPins from '../Components/displayPins';
import { inicialValue } from '../Components/inicialDefault';

function generateRandomNumbers(set: any, numberToDisplay: numberFormat): void {
  set(() => randomizer(numberToDisplay));
};

export default function Generate() {
  const [numberToDisplay, setNumberToDisplay]: any = useState({});

  useEffect(() => {
    setNumberToDisplay(inicialValue)
  }, [])

  const dispatch = useDispatch();
  const onAddPins = (pins: object) => {
    dispatch(addPins(pins))
  }

  return (
    <>
      <DefaultPage>
        {<DisplayPins numberToDisplay={numberToDisplay} />}
        <br />
        <Button className="buttongenerate" onClick={() => { generateRandomNumbers(setNumberToDisplay, numberToDisplay) }}>GENERATE</Button>
        <Button className="buttonsave" onClick={() => { onAddPins(numberToDisplay) }}>SAVE</Button>
      </DefaultPage>
    </>
  );
}

