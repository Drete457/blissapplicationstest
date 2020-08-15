import React, { useState, useEffect } from 'react';
import randomizer from '../Components/random/randomizer';
import DefaultPage from '../Components/view/DefaultPage';
import Button from '../Components/buttons/button';
import Input from '../Components/view/input';
import { useDispatch, useSelector } from 'react-redux';
import { addPins } from '../Components/redux/actions';
import { pinsState } from '../Components/redux/storeReducer';
import randomKey from '../Components/random/randomKey';

/*function generateRandomNumbers(set: any) {
  set(() => {
    let array: Array<object> = [];
    for (let i = 0; i < 5; i++) {
  //    array.push(randomizer());
    }
    return array;
  })
}*/

export default function Generate() {
  const pinsArray = useSelector<pinsState, pinsState["pins"]>((state) => state.pins);
  const [numberToDisplay, setNumberToDisplay]: any[] = useState([]);
  
  //pass the action to the button save
  const dispatch = useDispatch();
  const onAddPins = (pins: object) => {
    dispatch(addPins(pins))
  }
 
  useEffect(() => {
    setNumberToDisplay(pinsArray)
  }, [pinsArray])
  
  return (
    <>
      <DefaultPage>
        {numberToDisplay.map((value: object) => {
          const arrayOfPins: string[] = Object.values(value);
          const arrayOfPinsToDisplay = arrayOfPins.map((value) => {
            return (<Input key={randomKey()} type="text" className="number" value={value} readOnly={true} />)
          });
          return arrayOfPinsToDisplay;
        })}
        <br />
        <Button className="buttongenerate" onClick={() => {}}>GENERATE</Button>
        <Button className="buttonsave" onClick={() => {}}>SAVE</Button>
      </DefaultPage>
    </>
  );
}

