/* eslint-disable array-callback-return */
export default function consecutive(numberToVerify: Array<number>): boolean {
  let result = [];
  let sequence = 0;
  numberToVerify.map((value, index) => {
    let difference = 0;
    if (sequence === difference && difference !== 0) {
      result.push(index);
    }
    sequence = (difference === 1 || difference === -1) ? difference : 0;
  });
  return result.length === 0 ? false : true;
}

