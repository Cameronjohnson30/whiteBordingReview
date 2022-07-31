/////////////////////////////////////////////////Question 2 works without filter
function dedupping(array) {
  let seen = {};
  let out = [];
  let j = 0;
  for(let i = 0; i < array.length; i++) {
       let item = array[i];
       if(seen[item] !== 1) {
            seen[item] = 1; 
            out[j++] = item; // j iterates over to see if its duplicate = the index of index 
       }
  } 
  return out;

}
console.log(dedupping([7, 9, "hi", 12, "hi", 7, 53]))

//https://stackoverflow.com/questions/20792572/javascript-replace-all-20-with-a-space


//////////////////////////////////Question 2 with filter 

function removeDuplicate(array) {
  return array.filter((element, index) => array.indexOf(element) === index);
};
console.log(removeDuplicate([7, 9, "hi", 12, "hi", 7, 53]))

//https://www.w3schools.com/jsref/jsref_filter.asp


/////////////////////////////////////////////////Question 2 recursive
//recursive attempt
function dedupingRecursive(array){ //creates function 'dudupingRecursive' that takes 'array' as an argument
  const check = array.slice(0, array.length -1); //variable that slices an array at index 0 with a -1 end point. 
  const checkElement = array[array.length -1]; //variable
  if (array.length === 0) { //base case to return an array once it's empty
    return array;
  } else if (check.includes(checkElement)) { //checks to see if the array contains an element
    return dedupingRecursive(check); //calls original function taking 'check' as an argument
  } else {
    return [...dedupingRecursive(check), checkElement]; //returns original function with 'check' as an argument
  }
};

console.log(dedupingRecursive([7, 9, "hi", 12, "hi", 7, 53])); 
