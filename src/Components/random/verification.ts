/* eslint-disable array-callback-return */
import { numberFormat } from "../../Type/numberformat";
import consecutive from './consecutive_asc_or_des';
import sequence from "./sequence";

export default function verification(numberToVerify: numberFormat, randomNumber: number): boolean {
  const values = Object.values(numberToVerify);
  const array = randomNumber.toString().split('').map(Number);

  if (values.indexOf(randomNumber) !== -1){ 
    return true;
  } else if (consecutive(array)) {
    return true;
  } else if (sequence(array)) {
    return true;
  };

  return false;
}
