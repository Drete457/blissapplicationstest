import React, { useState, useEffect } from 'react';
import randomizer from '../Components/random/randomizer';
import DefaultPage from '../Components/view/DefaultPage';
import Button from '../Components/buttons/button';
import Input from '../Components/view/input';

const DefaultRandomNumber = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
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

