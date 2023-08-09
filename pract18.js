// Given two strings, return the characters that are not common in the two strings.

function uniqueStringCharacters(str1, str2) {
  let connectedString = str1 + str2;
  let result = '';
  for (let i = 0; i < connectedString.length; i++) {
    let letter = connectedString[i];
    if (connectedString.indexOf(letter) === connectedString.lastIndexOf(letter)) {
      result += letter;
    }
  }
  return result


}

console.log(uniqueStringCharacters("xyab", "xzca") === "ybzc");
console.log(uniqueStringCharacters("a", "z") === "az");
console.log(uniqueStringCharacters("abcd", "de") === "abce");
console.log(uniqueStringCharacters("abc", "abba") === "c");
console.log(uniqueStringCharacters("xyz", "zxy") === "");