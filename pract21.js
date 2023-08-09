// write a program that outputs The Flintstones Rock! 10 times,
// with each line indented 1 space to the right of the line above it. 

//inputs: string
//outputs: A string 10 times with a line indeted 1 space to the right after each Line

// DATA: strings

// ALGORTHRIM: intzalize a string and call it " The FlintStone rocks"
//2. used a for loop to go thru it 10 times 
//3. but after each loop add a space for the next line


let string = 'The FlintStones Rock!';

for (let i = 0; i < 10; i++) {
  let indeation = ' '.repeat(i);
  console.log(indeation + string);
}

