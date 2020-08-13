/* eslint-disable array-callback-return */
import numberFormat from '../Type/numberformat';
import hasRepeatNumber from './hasRepeatNumber';
import consecutive from './consecutive_asc_or_des';

export default function randomizer(DefaultRandomNumber: numberFormat): numberFormat {
    const keys = Object.keys(DefaultRandomNumber);
    let newRNumber = DefaultRandomNumber;
    keys.map((key) => {
        let randomNumber = 0;
        do {
            console.log("entrou")
            randomNumber = consecutive(newRNumber);
            newRNumber = {
                ...newRNumber,
                [key]: randomNumber,
            }
        } while (hasRepeatNumber(newRNumber))
    });
    return  newRNumber;
}
