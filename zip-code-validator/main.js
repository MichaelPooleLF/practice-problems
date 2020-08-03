function zipCodeValidator(zipToValidate) {
  if (zipToValidate.length <= 5) {
    if (zipToValidate.indexOf(" ") === -1) {
      if (typeof parseInt(zipToValidate) === "number") {
        return true;
      }
    }
  }

  return false;
}
