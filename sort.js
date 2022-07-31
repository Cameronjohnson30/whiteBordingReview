///////////////////////////////////////////////////////////question 5 works

function selectionSort(inputArr) { 
  let array = inputArr.length;
      
  for(let i = 0; i < array; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for(let j = i+1; j < array; j++){
          if(inputArr[j] < inputArr[min]) {
              min=j; 
          }
       }
       if (min != i) {
           // Swapping the elements
           let tmp = inputArr[i]; 
           inputArr[i] = inputArr[min];
           inputArr[min] = tmp;      
      }
  }
  return inputArr;
}

let inputArr = [9, 2, 7, 12];
selectionSort(inputArr);
console.log(inputArr);

