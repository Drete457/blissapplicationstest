import numberFormat from "../Type/numberformat";

export default function hasRepeatNumber(numberToVerify: numberFormat): Boolean {
    const number = Object.values(numberToVerify);
    return (/([0-9]).*?\1/).test(number.toString());
  }  
  