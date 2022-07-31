/////////////////////////////////////////////////Question 2 works without filter
function dedupping(array) {
  let seen = {};
  let out = [];
  let j = 0;
  for(let i = 0; i < array.length; i++) {
       let item = array[i];
       if(seen[item] !== 1) {
            seen[item] = 1; 
            out[j++] = item;
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