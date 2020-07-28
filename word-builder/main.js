function wordBuilder(string) {
  var returnArray = [];
  var position = string.length;
  for(var i = position; i >= 0; i--) {
    returnArray[i] = string.substring(0, i);
  }
  return returnArray
}

console.log(wordBuilder("string"));
console.log(wordBuilder("Wanahockalogi"));
console.log(wordBuilder("SharkBait"));
