var wordReformerResult1 = wordReformer("bro", "ken");
var wordReformerResult2 = wordReformer("cap", "ture");
var wordReformerResult3 = wordReformer("Wanahock", "aloogi");

function wordReformer(wordFragment1, wordFragment2) {
  return wordFragment1 + wordFragment2;
}

function checkDataType(data) {
  return typeof data;
}

console.log("Reformed word example 1:", wordReformerResult1);
console.log("The type of the reformed word is:", checkDataType(wordReformerResult1));
console.log("Reformed word example 2:", wordReformerResult2);
console.log("The type of the reformed word is:", checkDataType(wordReformerResult2));
console.log("Reformed word example 3:", wordReformerResult3);
console.log("The type of the reformed word is:", checkDataType(wordReformerResult3));
