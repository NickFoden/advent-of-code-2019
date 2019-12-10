const day6 = data => {
  let result = {};
  let orbits = 0;
  for (let i = 0; i < data.length; i++) {
    const item = data[i].split(")");
    const [one, two] = item;
    result[two] = one;
  }

  let trailerKeys = Object.keys(result);
  // let trailerArray = Object.values(result);
  for (let i = 0; i < trailerKeys.length; i++) {
    const current = trailerKeys[i];

    let next = result[current];

    while (next) {
      next = result[next];
      orbits += 1;
    }
  }

  return orbits;
};

module.exports = day6;
