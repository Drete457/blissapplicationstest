import React, { useState, useEffect } from 'react';
import randomizer from '../Components/randomizer';
import DefaultPage from '../Components/DefaultPage';
import Button from '../Components/button';
import Input from '../Components/input';

const DefaultRandomNumber = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
}

export default function Generate() {
  const [numberToDisplay, setNumberToDisplay]: any[] = useState([]);

  useEffect(() => {
    setNumberToDisplay(() => {
      let array: Array<object> = [];
      for (let i = 0; i < 5; i++) {
        array.push(DefaultRandomNumber);
      }
      return array;
    })
  }, [])
  
  return (
    <>
      <DefaultPage>
        {numberToDisplay.length >= 1 && numberToDisplay.map((value: any, index: number) => {
          const text: string = Object.values(value).join(" ");
          return (<Input key={index} type="text" className="number" value={text} readOnly={true} />)
        })}
        <br />
        <Button className="buttongenerate" onClick={() => {}}>GENERATE</Button>
        <Button className="buttonsave" onClick={() => {}}>SAVE</Button>
      </DefaultPage>
    </>
  );
}

