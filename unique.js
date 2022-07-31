///////////////////////Question 4 without array

function stringIsUnique(input) { // function that takes in an input as an argument 
  for (i = 0; i < input.length; i++) { // for loop that goes over the length incrementing by 1 index each time it loops
    if (input.indexOf(input[i]) !== input.lastIndexOf(input[i])) { // checks if the the index of the input does not match the index input of the last index if it does then its false 
      return false;
    }
  }
  return true;
}
console.log(stringIsUnique( "christmas"));


//https://stackoverflow.com/questions/28207610/checking-if-the-characters-in-a-string-are-all-unique