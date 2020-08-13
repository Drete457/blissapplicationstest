/* eslint-disable array-callback-return */
import numberFormat from '../Type/numberformat';
import random from '../Components/random';
import hasRepeatNumber from './hasRepeatNumber';

export default function randomizer(DefaultRandomNumber: numberFormat): numberFormat {
    const keys = Object.keys(DefaultRandomNumber);
    let newRNumber = DefaultRandomNumber;
    keys.map((key) => {
        let randomNumber = 0;
        do {
            randomNumber = random();
            newRNumber = {
                ...newRNumber,
                [key]: randomNumber,
            }
        } while (hasRepeatNumber(newRNumber))
    });
    return newRNumber;
}