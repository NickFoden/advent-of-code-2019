const day5pt2 = (intsArray, userInput = 5) => {
  let resultArray = [...intsArray];
  let result = "0";

  const getMemory = (mode, index) => {
    return mode === "0" ? resultArray[resultArray[index]] : resultArray[index];
  };

  for (let i = 0; i < resultArray.length; ) {
    const current = resultArray[i].padStart(5, "0");
    const oCode = Number(current.slice(3));
    const mode1 = current.slice(2, 3);
    const mode2 = current.slice(1, 2);
    const mode3 = current.slice(0, 1);
    if (oCode === 99) {
      break;
    } else if (oCode === 1) {
      resultArray[resultArray[i + 3]] = `${Number(getMemory(mode1, i + 1)) +
        Number(getMemory(mode2, i + 2))}`;
      i += 4;
    } else if (oCode === 2) {
      resultArray[resultArray[i + 3]] = `${Number(getMemory(mode1, i + 1)) *
        Number(getMemory(mode2, i + 2))}`;
      i += 4;
    } else if (oCode === 3) {
      resultArray[resultArray[i + 1]] = `${userInput}`;
      i += 2;
    } else if (oCode === 4) {
      result = getMemory(mode1, i + 1);
      i += 2;
    } else if (oCode === 5) {
      if (Number(getMemory(mode1, i + 1)) !== 0) {
        i = Number(getMemory(mode2, i + 2));
      } else {
        i += 3;
      }
    } else if (oCode === 6) {
      if (Number(getMemory(mode1, i + 1)) === 0) {
        i = Number(getMemory(mode2, i + 2));
      } else {
        i += 3;
      }
    } else if (oCode === 7) {
      if (Number(getMemory(mode1, i + 1)) < Number(getMemory(mode2, i + 2))) {
        resultArray[resultArray[i + 3]] = "1";
      } else {
        resultArray[resultArray[i + 3]] = "0";
      }
      i += 4;
    } else if (oCode === 8) {
      if (Number(getMemory(mode1, i + 1)) === Number(getMemory(mode2, i + 2))) {
        resultArray[resultArray[i + 3]] = "1";
      } else {
        resultArray[resultArray[i + 3]] = "0";
      }
      i += 4;
    }
  }
  return result;
};

module.exports = day5pt2;
