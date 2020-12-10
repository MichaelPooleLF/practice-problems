
// this function will find the mean of an array, even if that array has a number
// written as a string value. the method .toFixed rounds the number retrieved by
// dividing sumArray and the array.length to the nearest two digits.
function meanCalculator(array) {
  var sumArray = null;
  for (var i = 0; i < array.length; i++) {
    sumArray += Number(array[i]);
  }
  var meanArray = Number((sumArray / array.length).toFixed(2));
  return meanArray;
}
