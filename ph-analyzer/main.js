function phAnalyzer(pH) {
  switch (pH) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      console.log("acidic");
      break;
    case 7:
      console.log("neutral");
      break;
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
      console.log("alkaline");
      break;
    default:
      console.log("invalid pH value");
  }
}

phAnalyzer(2);
phAnalyzer(7);
phAnalyzer(13);
phAnalyzer(15);
