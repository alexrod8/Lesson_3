
// set a function called rps with parameters of (fist1, fist2)
// if fist1 === rock return fist 2 === paper since Paper beats rock it returns PAPER
// else if fist1 === paper return fist 2 === scissors Since sisscors beat paper it returns SCISSORS
// else fist2 === rock since rock beats scissors returns ROCK
// LOG to the which outputs Paper, rock, rock
// then again elemating both rock
// OUTPUTS: PAPER


function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));