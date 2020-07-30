function createRepeatingLetters(word, numOfRepeats) {
  var newWord = "";
  for (var i = 0; i < word.length; i++) {
    for (var n = 0; n < numOfRepeats; n++) {
      newWord += word[i];
    }
  }
  return newWord;
}
