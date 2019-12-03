const closestCross = (course1, course2) => {
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

  const crosses = route2.filter(item => route1.has(item));
  const mapCourseSteps = (course, crosses) => {
    const crossesSet = new Set(crosses);
    let finalResult = [];
    let result = new Set();
    let current = { x: 0, y: 0 };
    let steps = 0;
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
        steps++;
        if (crossesSet.has(`${current.x}, ${current.y}`)) {
          finalResult.push({ cross: `${current.x}, ${current.y}`, steps });
        }
      }
    }
    return finalResult;
  };

  const steps1 = mapCourseSteps(course1, crosses);

  const steps2 = mapCourseSteps(course2, crosses);

  const lowestSteps = (one, two) => {
    let result = [];
    for (let item of one) {
      let partner = two.filter(two => two.cross === item.cross);
      let newResult = item.steps + partner[0]["steps"];
      result.push(newResult);
    }
    return result.sort((a, b) => a - b)[0];
  };

  return lowestSteps(steps1, steps2);
};

module.exports = closestCross;
