/* eslint-disable array-callback-return */
import numberFormat from '../../Type/numberformat';
import hasRepeatNumber from './hasRepeatNumber';
import random from './random';

export default function randomizer(DefaultRandomNumber: numberFormat): numberFormat {
    const keys = Object.keys(DefaultRandomNumber);
    let newRNumber = DefaultRandomNumber;
    keys.map((key) => {

        let randomNumber = random();

        while (hasRepeatNumber(newRNumber, randomNumber)) {
            randomNumber = random();   
        };

        newRNumber = {
            ...newRNumber,
            [key]: randomNumber,
        };
    })
    
    return newRNumber;
}


