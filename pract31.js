

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
  
}

 let one = ["one"];
 let two = ["two"];
 let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // two
console.log(`two is: ${two}`); // three 
console.log(`three is: ${three}`); // one