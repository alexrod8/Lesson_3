// first the Variable answer takes a primtive vaule that is A number
// Next the function MessWithIt takes a parameter called someNumber that returns (42 += 8);
// the function then gets set to newAnswer and would return 50
// finally log (42 - 8) = 34


let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);
//console.log(newAnswer);