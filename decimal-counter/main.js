function decimalPlaceCounter(stringNumber) {
  var decimalPlaces = "";
  for (var i = 0; i < stringNumber.length; i++) {
    if (stringNumber[i] === ".") {
      for (var j = ++i; j < stringNumber.length; j++) {
        decimalPlaces += stringNumber[j];
      }
    }
  }
  return decimalPlaces.length;
}
