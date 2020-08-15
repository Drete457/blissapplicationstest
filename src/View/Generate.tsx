import React, { useState, useEffect } from 'react';
import randomizer from '../Components/random/randomizer';
import DefaultPage from '../Components/view/DefaultPage';
import Button from '../Components/buttons/button';
import Input from '../Components/view/input';
import { useDispatch, useSelector } from 'react-redux';
import { addPins } from '../Components/redux/actions';
import { pinsState } from '../Components/redux/storeReducer';

function generateRandomNumbers(set: any) {
  set(() => {
    let array: Array<object> = [];
    for (let i = 0; i < 5; i++) {
      array.push(randomizer(DefaultRandomNumber));
    }
    return array;
  })
}

export default function Generate() {

  const pinsArray = useSelector<pinsState, pinsState["pins"]>((state) => state.pins)
  
  const dispatch = useDispatch()

  //pass the action to the button save
  const onAddPins = (pins: object) => {
    dispatch(addPins(pins))
  }
 
  const [numberToDisplay, setNumberToDisplay]: any[] = useState(pinsArray);
  console.log(numberToDisplay)

  /*useEffect(() => {
    generateRandomNumbers(setNumberToDisplay)
  }, [])*/
  
  return (
    <>
      <DefaultPage>
        {numberToDisplay.map((value: object) => {
          const arrayOfPins: string[] = Object.values(value);
          const arrayOfPinsToDisplay = arrayOfPins.map((value) => {
            return (<Input key={"0" + value} type="text" className="number" value={value} readOnly={true} />)
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
//() => {generateRandomNumbers(setNumberToDisplay)}

