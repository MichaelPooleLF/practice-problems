function convertMinutesToSeconds(timeToConvert) {
  const splitAtColon = timeToConvert.split(":");
  splitAtColon.forEach((element, index) => {
    splitAtColon[index] = parseFloat(element)
  });
  splitAtColon[0] = splitAtColon[0] * 60;
  const totalSeconds = splitAtColon[0] + splitAtColon[1];
  return totalSeconds;
}

console.log(convertMinutesToSeconds("15:34"));
console.log(convertMinutesToSeconds("02:45"));
console.log(convertMinutesToSeconds("08:21"));
