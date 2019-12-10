const day8 = (data, wide, tall) => {
  const result = {};
  let marker = 0;
  for (let i = 0; i < tall; i++) {
    result[`Layer ${i + 1}`] = [];
    for (let j = 0; j < tall; j++) {
      result[`Layer ${i + 1}`].push(data.slice(marker, marker + wide));
      marker += wide;
    }
  }
  const zeroResults = {};
  for (let obj in result) {
    zeroResults[obj] = 0;
    for (let item in result[obj]) {
      const zeroCount = result[obj][item]
        .split("")
        .filter(char => char === "0");
      zeroResults[obj] += zeroCount.length;
    }
  }
  let currentCount = wide
  let theLayerKey = "";

  for (let item in zeroResults) {
    if (zeroResults[item] < currentCount) {
      theLayerKey = item;
      currentCount = zeroResults[item];
    }
  }

  let theLayer = result[theLayerKey];
  let ones = 0;
  let twos = 0;

  for (let iter in theLayer) {
    const onesCount = theLayer[iter].split("").filter(char => char === "1");
    const twosCount = theLayer[iter].split("").filter(char => char === "2");
    ones += onesCount.length;
    twos += twosCount.length;
  }

  return ones * twos;
};

module.exports = day8;
