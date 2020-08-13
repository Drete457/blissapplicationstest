import numberFormat from "../Type/numberformat";
import random from '../Components/random';

export default function randomizer(DefaultRandomNumber: numberFormat): numberFormat {
    const keys = Object.keys(DefaultRandomNumber);
    let newRNumber = DefaultRandomNumber;
    keys.map((key) => 
      newRNumber = {
        ...newRNumber,
        [key] : random(),
    });
    return newRNumber;
  }