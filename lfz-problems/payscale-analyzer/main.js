function payscaleAnalyzer(paylist) {
  paylist.sort(function(a, b) {
    return a - b;
  })
  var lastNum = paylist[paylist.length - 1];
  var firstNum = paylist[0];
  return lastNum - firstNum;
}
