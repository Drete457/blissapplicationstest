import React, {useState} from 'react';
import '../CSS/App.css';
import randomizer from '../Components/randomizer';

const DefaultRandomNumber = {
  one: 1,
  two: 1,
  three: 1,
  four: 1,
  five: 1,
}

export default function MainView() {
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

