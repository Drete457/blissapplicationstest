import React from "react";
import { numberFormat } from "../Type/numberformat";
import Input from "./view/input";
import randomKey from "./random/randomKey";

export default function DisplayPins({numberToDisplay}: {numberToDisplay: numberFormat }): any {
    const arrayOfPins: number[] = Object.values(numberToDisplay);
    const arrayOfPinsToDisplay = arrayOfPins.map((value) => {
      const text = value + ""
      return (<Input key={randomKey()} type="text" className="number" value={text} readOnly={true} />)
    });
    return arrayOfPinsToDisplay;
  }