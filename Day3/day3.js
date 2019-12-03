const manhatDist = (course1, course2) => {
  const mapCourse = course => {
    let result = new Set();
    let current = { x: 0, y: 0 };
    for (item of course) {
      let d = item.slice(0, 1);
      let amount = item.slice(1);
      for (let i = 0; i < amount; i++) {
        if (d === "R") {
          current = {
            x: `${current.x * 1 + 1}`,
            y: `${current.y}`
          };
        } else if (d === "L") {
          current = {
            x: `${current.x - 1}`,
            y: `${current.y}`
          };
        } else if (d === "D") {
          current = {
            x: `${current.x}`,
            y: `${current.y - 1}`
          };
        } else if (d === "U") {
          current = {
            x: `${current.x}`,
            y: `${current.y * 1 + 1}`
          };
        }
        result.add(`${current.x}, ${current.y}`);
      }
    }
    return result;
  };

  const route1 = mapCourse(course1);
  const route2 = [...mapCourse(course2)];

  const crosses = route2
    .filter(item => route1.has(item))
    .map(item => item.split(",").map(Number))
    .map(([x, y]) => Math.abs(x) + Math.abs(y))
    .sort((a, b) => a - b)[0];
  return crosses;
};

module.exports = manhatDist;
