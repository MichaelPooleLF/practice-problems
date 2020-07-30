function removeNullValues(array) {
  var newArray = [];
  var length = array.length
  var newArrayIndex = 0;
  for (var i = 0; i < length; i++) {
    if(array[i] !== null) {
      newArray[newArrayIndex] = array[i];
      newArrayIndex++
    }
  }
  return newArray;
}
