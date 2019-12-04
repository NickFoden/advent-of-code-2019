const START = 145852;
const END = 616942;

const secureContainer = () => {
  let floor = START;
  let count = 0;
  for (let i = 0; i < END - START; i++) {
    isLegit((floor += 1)) ? (count += 1) : null;
  }
  return count;
};

const isLegit = val => {
  let double = false;
  let valArray = val.toString().split("");
  for (let i = 0; i < valArray.length - 1; i++) {
    if (valArray[i] === valArray[i + 1]) {
      double = true;
    }
    if (valArray[i] > valArray[i + 1]) {
      return false;
    }
  }
  return double ? true : false;
};

module.exports = secureContainer;
