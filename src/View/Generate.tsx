import React, { useState, useEffect } from 'react';
import randomizer from '../Components/random/randomizer';
import DefaultPage from '../Components/view/DefaultPage';
import Button from '../Components/buttons/button';
import Input from '../Components/view/input';
import { useDispatch } from 'react-redux';
import { addPin } from '../Components/redux/actions';

const DefaultRandomNumber = {
  one: 1,
  two: 1,
  three: 1,
  four: 1,
  five: 1,
}

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
  
  
  const dispatch = useDispatch()

  //pass the action to the button save
  const onAddPins = (pins: string) => {
    dispatch(addPin(pins))
  }
 
  const [numberToDisplay, setNumberToDisplay]: any[] = useState([]);

  useEffect(() => {
    generateRandomNumbers(setNumberToDisplay)
  }, [])
  
  return (
    <>
      <DefaultPage>
        {numberToDisplay.length >= 1 && numberToDisplay.map((value: any, index: number) => {
          const text: string = Object.values(value).join(" ");
          return (<Input key={index} type="text" className="number" value={text} readOnly={true} />)
        })}
        <br />
        <Button className="buttongenerate" onClick={() => {generateRandomNumbers(setNumberToDisplay)}}>GENERATE</Button>
        <Button className="buttonsave" onClick={() => {}}>SAVE</Button>
      </DefaultPage>
    </>
  );
}

