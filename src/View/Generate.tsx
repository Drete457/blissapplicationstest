import React, { useState, useEffect } from 'react';
import randomizer from '../Components/random/randomizer';
import DefaultPage from '../Components/view/DefaultPage';
import Button from '../Components/buttons/button';
import { useDispatch, useSelector } from 'react-redux';
import { addPin } from '../Components/redux/actions';
import { numberFormat } from '../Type/numberformat';
import DisplayPins from '../Components/displayPins';
import { inicialValue } from '../Components/inicialDefault';
import { pinsState } from '../Components/redux/storeReducer';

function generateRandomNumbers(set: any, numberToDisplay: numberFormat, setWasSave: any): void {
  setWasSave(false);
  set(() => randomizer(inicialValue));
};

export default function Generate() {
  const pinsArray = useSelector<pinsState, pinsState["pins"]>((state) => state.pins);
  const [message, setMessage] = useState('');
  const [wasSave, setWasSave] = useState(false);
  const [numberToDisplay, setNumberToDisplay]: any = useState({});

  useEffect(() => {
    setNumberToDisplay(randomizer(inicialValue))
  }, [])

  const dispatch = useDispatch();
  const onAddPins = (pins: object) => {
    const result = pinsArray.indexOf(pins);
    if (result === -1) {
      dispatch(addPin({'name': '',...pins}));
      setMessage('Pins have been saved successfully');
      setWasSave(true);
    } else {
      setMessage('cannot be saved again');
      setWasSave(true)
    }
  }

  return (
    <>
      <DefaultPage>
        {<DisplayPins numberToDisplay={numberToDisplay} />}
        <br />
        <Button className="buttongenerate" onClick={() => { generateRandomNumbers(setNumberToDisplay, numberToDisplay, setWasSave) }}>GENERATE</Button>
        <Button className="buttonsave" onClick={() => { onAddPins(numberToDisplay) }}>SAVE</Button>
        <br />
        {wasSave && <h1><DisplayPins numberToDisplay={numberToDisplay} /> {message}</h1>}
      </DefaultPage>
    </>
  );
}

