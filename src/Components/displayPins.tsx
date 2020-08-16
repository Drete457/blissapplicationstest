import React from "react";
import { numberFormat, numberFormatInicial } from "../Type/numberformat";
import Input from "./view/input";
import randomKey from "./random/randomKey";

export default function DisplayPins({ numberToDisplay }: { numberToDisplay: numberFormat | numberFormatInicial }): any {
  const arrayOfPins: any[] = Object.entries(numberToDisplay);

  const arrayOfPinsToDisplay = arrayOfPins.map((value) => {
    const text = value[1] + '';

    return (<Input key={randomKey()} type="text" className="number" value={text} readOnly={true} />);
  });
  return arrayOfPinsToDisplay;
};
