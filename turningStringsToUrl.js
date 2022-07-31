///////////////////////////////////////////refractored below
function replaceSpaces(string){ //takes string as argument
  let newString = " ";//state newString that we will return to
  for(let i = 0; i < string.length; i++){//iterate through the length of the string
    if(string[i]=== " "){//if the index of the string is blank replace it with 20%
      newString = newString + "20%"
    } else {
      newString = newString + string[i]; // else if it isnt blank add that index 
    }
  }
  return newString;//return the results
};

console.log(replaceSpaces("Jasmine Ann Jones"));

/// https://stackoverflow.com/questions/20792572/javascript-replace-all-20-with-a-space