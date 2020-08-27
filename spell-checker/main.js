function spellChecker(userWords, correctWords) {
  const returnArrays = {};
  returnArrays.correct = [];
  returnArrays.incorrect = [];
  userWords.forEach(element => {
    let isWordCorrect = false;
    for (let i = 0; i < correctWords.length; i++) {
      if (element === correctWords[i]) {
        isWordCorrect = true;
      }
    }
    if (isWordCorrect === true) {
      returnArrays.correct.push(element);
    } else {
      returnArrays.incorrect.push(element);
    }
  })
  return returnArrays;
}
console.log(spellChecker(["boy", "duct", "ice cream", "sendwich"], ["boy", "duck", "ice cream", "sandwich"]))
console.log(spellChecker(["jam", "breat", "sound"], ["jam", "bread", "sound"]));
console.log(spellChecker(["java", "CDS", "HTMO"], ["java", "CSS", "HTML"]));
