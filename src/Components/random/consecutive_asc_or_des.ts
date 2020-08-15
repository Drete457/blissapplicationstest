/* eslint-disable array-callback-return */
export default function consecutive(array: number[]): boolean {
  let result:number[] = [];
  let sequence = 0;
  
  Array.from(array).map((value, index) => {
    let difference = array[index + 1] - array[index];
    
    if (sequence === difference && difference !== 0) {
      result.push(value);
    }
    sequence = (difference === 1 || difference === -1) ? difference : 0;
  });

  return result.length === 0 ? false : true;
}

