const START = 145852;
const END = 616942;

const secureContainer = () => {
  const range = END - START;
  let floor = 145852;
  let count = 0;

  for (let i = 0; i < range; i++) {
    isLegit((floor += 1)) ? (count += 1) : null;
  }

  return count;
};

const isLegit = val => {
  let double = false;
  if (val.toString().length > 6) {
    return false;
  }
  if (val < START) {
    return false;
  }
  if (val > END) {
    return false;
  }
  let valArray = val.toString().split("");
  for (let i = 0; i < valArray.length - 1; i++) {
    if (valArray[i] === valArray[i + 1]) {
      double = true;
    }
    if (valArray[i] > valArray[i + 1]) {
      return false;
    }
  }
  if (double) {
    return true;
  } else {
    return false;
  }
};

module.exports = secureContainer;
