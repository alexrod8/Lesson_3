// to Help clean and adjust this code instead of breaking you return a false statment;

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length !== 4) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      // break 
      return false;
    }

  }
  return true;
}



console.log(isDotSeparatedIpAddress("1.6.3.4")); 
