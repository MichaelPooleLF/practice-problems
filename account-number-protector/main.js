function accountNumberProtector(cardNumberString) {
  let protectedNumber = '';
  for (let index = cardNumberString.length - 6; index < cardNumberString.length; index++) {
    if (index < cardNumberString.length - 4) {
      protectedNumber += "*";
    } else {
      protectedNumber += cardNumberString[index];
    }
  }
  return protectedNumber;
}

console.log(accountNumberProtector("5543223485638832"));
console.log(accountNumberProtector("8934235477210943"));
console.log(accountNumberProtector("7513635499320192"));
