function compress(string){
  let str = ""; //create a variable to store the return into 
    for(let i = 0; i < string.length; i++) {   // for loop to iterate through the length of the string by index of 1 
                                      // Counting occurrences of s[i]
      let count = 1;// make variable of count that way we can keep track of the occurences starting with one 
      while (i + 1 < string.length && string.charAt(i) == string.charAt(i + 1)) { //run the loop till the length of the string and till the index equals the next index 
          count++;// add one to the count 
          i++;//check the next index and repeat the loop
        }
       if (count > 1) {  //if statement to handle numbers higher than one to state the number of occurences and add the character at that index 
      str +=  count + string.charAt(i);     }
        else if (count === 1  ){ //else if the number of occurences happens once just add the character at the index 
        str += string.charAt(i); 
    }}
    return str
}
console.log(compress('aaabccdddda'));