/* eslint-disable array-callback-return */
import numberFormat from "../../Type/numberformat";
import random from "./random";

export default function consecutive(numberToVerify: numberFormat): number {
  const numbers = Object.values(numberToVerify);
  let num = random();
  numbers.map((value, index) => {
    if (index !== 0 && index !== 1 ) {
      while (verify(numbers[index - 2], num)) {
        num  = random();
      }
    }
  })
  return num;
}

function verify(num1: number, num2: number): boolean {
  return num1 - 2 === num2 && num1 + 2 === num2;
}