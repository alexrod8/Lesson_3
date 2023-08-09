// foo returns "yes"
// bar("yes") evaluates the ternary as false and thus returns "no"


function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

console.log(bar(foo()));