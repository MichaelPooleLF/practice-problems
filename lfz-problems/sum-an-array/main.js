function sumArray(numbersArray) {
  var sumArrayResult = 0;
  var arrayLength = numbersArray.length;
  for(var i = 0; i < arrayLength; i ++) {
    sumArrayResult += numbersArray[i];
  }
  return sumArrayResult;
}
