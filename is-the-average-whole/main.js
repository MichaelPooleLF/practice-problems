function isTheAverageWhole(array) {
  var arraySum = 0;
  var arrayLength = array.length

  for (var index = 0; index < arrayLength; index++) {
    arraySum += array[index];
  }

  return arraySum % arrayLength === 0;
}
