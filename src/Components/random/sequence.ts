/* eslint-disable array-callback-return */
export default function sequence(arrayNumber: number[]): boolean{
    let result = false;
    console.log(arrayNumber)

    arrayNumber.filter((value1, index) => {
      
        if (value1 === arrayNumber[index+1]) {
            result = true;
            return true;
        }
    })

    return result;
}