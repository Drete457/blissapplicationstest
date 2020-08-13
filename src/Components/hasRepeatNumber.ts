import numberFormat from "../Type/numberformat";

export default function hasRepeatNumber(numberToVerify: numberFormat): boolean {
    const number = Object.values(numberToVerify);
    return (/([0-9]).*?\1/).test(number.toString());
  }  
  