import React, {useState} from 'react';
import '../CSS/App.css';
import randomizer from '../Components/randomizer';

const DefaultRandomNumber = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
}

export default function Generate() {
  const [numberToDisplay, setNumberToDisplay] = useState(DefaultRandomNumber);
  return (
    <div className="App">
     {numberToDisplay.one}
      {numberToDisplay.two}
      {numberToDisplay.three}
      {numberToDisplay.four}
      {numberToDisplay.five}
      <button onClick={() => setNumberToDisplay(randomizer(numberToDisplay))}>GENERATE</button>
    </div>
  );
}

