/* eslint-disable array-callback-return */
import { numberFormat } from '../../Type/numberformat';
import verification from './verification';
import random from './random';

export default function randomizer(numberToWork: numberFormat): numberFormat {
    const keys = Object.keys(numberToWork);
    let newRNumber = numberToWork;

    keys.map((key) => {

        let randomNumber = random();

        while (verification(newRNumber, randomNumber)) {
            randomNumber = random();   
        };

        newRNumber = {
            ...newRNumber,
            [key]: randomNumber,
        };
    })
   
    return newRNumber;
}


