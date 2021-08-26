const stringLength = (letter) => {
  if (letter.length < 1) {
    return "Letter should be equal or greater than 1";
  } else if (letter.length > 10) {
    return "Letter should be equal or less than 10";
  } else {
    return letter.length;
  }
}

module.exports = stringLength;