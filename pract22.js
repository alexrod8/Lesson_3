// Set the variable munsterDescription to a string
// set the variable newString to an empty string 
// use a for loop to loop through the string munsterDescription
// set a variable letter to munstersDecription[i] which is each word sepreated 
// If letter = letter.ToUpperCase() add to the newString and switch the letter to lowerCase
// else add to the letter.ToUpperCase() the rest of the lowerCase letters in newString




let munstersDescription = "The Munsters are creepy and spooky.";
let newString = '';
for (let i = 0; i < munstersDescription.length; i++) {
  let letter = munstersDescription[i];
  if (letter === letter.toUpperCase()) {
    newString += letter.toLowerCase();
  } else {
    newString += letter.toUpperCase();
  }
  //console.log(newString); if you console.log here it goes 1 by 1 till the string is done
}
console.log(newString);