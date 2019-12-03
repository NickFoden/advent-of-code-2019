const Intcode = resultArray => {
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
  return resultArray[0];
};

const findNounAndVerb = intsArray => {
  for (let i = 0; i < 100; i++) {
    let noun = i;
    for (let j = 0; j < 100; j++) {
      let verb = j;
      let resultArray = [...intsArray];
      resultArray[1] = noun;
      resultArray[2] = verb;
      if (Intcode(resultArray) === 19690720) {
        console.log("noun: " + noun + " verb: " + verb);
        return Intcode(resultArray);
      }
    }
  }
};

module.exports = findNounAndVerb;
