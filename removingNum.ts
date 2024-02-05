function removeNumber(inputArray: number[], inputNumber: number): number[] {
  // Initialize empty array
  let outputArray: number[] = [];
  // Iterate the array
  for (let i=0; i < inputArray.length; i++) {
    // Check the condition for inputNumber
    if (inputArray[i] !== inputNumber){
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
}


// input array
const inputArray: number[] = [1, 2, 1, 2, 1];
// input number
const inputNumber: number = 2;
// function call
const outputArray: number[] = removeNumber(inputArray, inputNumber);
// return the array
console.log(outputArray)