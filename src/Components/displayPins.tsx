import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { numberFormat, numberFormatInicial } from "../Type/numberformat";
import { updatePins } from "./redux/actions";
import Input from "./view/input";
import randomKey from "./random/randomKey";

export default function DisplayPins({ numberToDisplay, index }: { numberToDisplay: numberFormatInicial | numberFormat, index?: number } ): any {
  const dispatch = useDispatch();
  const updatePin = (pins: object) => {
    dispatch(updatePins(pins));
  };

  const arrayOfPins: any[] = Object.entries(numberToDisplay);

  const updatePinName = ((newName: string) => {
    let newObj: { [name: string]: any } = numberToDisplay;
    newObj.name = newName;
    updatePin(newObj);
    return newName
  });

  const arrayOfPinsToDisplay = arrayOfPins.map((value) => {
    const text = value[1] + '';

    if (value[0] === 'name') {
      return (<Input key={randomKey()} type="text" className="name"
        value={value[1]} readOnly={false}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          updatePinName(event.target.value);
        }}
        placeholder="Name" />);
    }

    return (<Input key={randomKey()} type="text" className="number" value={text} readOnly={true} />);
  });
  return arrayOfPinsToDisplay;
};
