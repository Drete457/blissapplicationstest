/* eslint-disable array-callback-return */
import numberFormat from "../../Type/numberformat";
import consecutive from './consecutive_asc_or_des';

export default function hasRepeatNumber(numberToVerify: numberFormat, randomNumber: number): boolean {
  const values = Object.values(numberToVerify);
  let result = false
  if (values.indexOf(randomNumber) !== -1 || consecutive(values)) {
    result = true;
  };
  return result;
}
