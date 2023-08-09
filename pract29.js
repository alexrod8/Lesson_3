function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return { 
   //{ you cant have it below a return because a return automatically puts a ; which leds to undefined
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());