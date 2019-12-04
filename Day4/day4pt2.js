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
  let uniques = {};
  let valArray = val.toString().split("");
  for (let i = 0; i < valArray.length - 1; i++) {
    if (valArray[i] > valArray[i + 1]) {
      return false;
    }
  }

  for (let i = 0; i < valArray.length - 1; i++) {
    if (valArray[i] === valArray[i + 1]) {
      uniques[valArray[i]]
        ? (uniques[valArray[i]] = uniques[valArray[i]] + 1)
        : (uniques[valArray[i]] = 1);
    }
  }

  for (let item in uniques) {
    if (uniques[item] === 1) {
      double = true;
    }
  }

  return double ? true : false;
};

module.exports = secureContainer;
