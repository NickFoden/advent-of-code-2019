const day8 = (data, wide, tall) => {
  const result = {};
  const finalArray = [];
  for (let i = 0; i < tall; i++) {
    finalArray[i] = [];
    for (let j = 0; j < wide; j++) {
      finalArray[i].push("2");
    }
  }
  let marker = 0;
  for (let i = 0; i < tall * wide; i++) {
    result[`Layer ${i + 1}`] = [];
    for (let j = 0; j < tall; j++) {
      result[`Layer ${i + 1}`].push(data.slice(marker, marker + wide));
      marker += wide;
    }
  }
  for (let obj in result) {
    for (let i = 0; i < result[obj]["length"]; i++) {
      const row = result[obj][i];
      row.split("").forEach((element, idx) => {
        if (finalArray[i][idx] === "2") {
          if (element === "1") {
            finalArray[i][idx] = "1";
          }
          if (element === "0") {
            finalArray[i][idx] = "0";
          }
        }
      });
    }
  }

  let message = [];
  for (let item of finalArray) {
    const finalItem = item.join("");
    message.push(finalItem);
  }
  return message;
};

module.exports = day8;

//   0 is black, 1 is white, and 2 is transparent.
