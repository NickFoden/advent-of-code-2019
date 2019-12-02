const Intcode = intsArray => {
  let resultArray = [...intsArray];
  for (let i = 0; i < resultArray.length; ) {
    if (resultArray[i] === 99) {
      break;
    } else if (resultArray[i] === 1) {
      resultArray[resultArray[i + 3]] =
        resultArray[resultArray[i + 1]] + resultArray[resultArray[i + 2]];
      i = i + 4;
    } else if (resultArray[i] === 2) {
      resultArray[resultArray[i + 3]] =
        resultArray[resultArray[i + 1]] * resultArray[resultArray[i + 2]];
      i = i + 4;
    } else {
      i = i + 1;
    }
  }
  return resultArray;
};

module.exports = Intcode;
