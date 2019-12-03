const manhatDist = (course1, course2) => {
  const mapCourse = course => {
    let result = [[0, 0]];
    for (item of course) {
      let d = item.slice(0, 1);
      let amount = item.slice(1);
      for (let i = 0; i < amount; i++) {
        let newPiece;
        if (d === "R") {
          newPiece = [
            `${result[result.length - 1][0] * 1 + 1}`,
            `${result[result.length - 1][1]}`
          ];
        } else if (d === "L") {
          newPiece = [
            `${result[result.length - 1][0] - 1}`,
            `${result[result.length - 1][1]}`
          ];
        } else if (d === "D") {
          newPiece = [
            `${result[result.length - 1][0]}`,
            `${result[result.length - 1][1] - 1}`
          ];
        } else if (d === "U") {
          newPiece = [
            `${result[result.length - 1][0]}`,
            `${result[result.length - 1][1] * 1 + 1}`
          ];
        }
        result.push(newPiece);
      }
    }
    return result;
  };

  const route1 = mapCourse(course1);
  const route2 = mapCourse(course2);

  const filterCrosses = item => {
    for (let i = 0; i < route2.length; i++) {
      if (JSON.stringify(item) === JSON.stringify(route2[i])) {
        return true;
      }
    }
  };

  const crosses = route1.filter(item => filterCrosses(item));
  const shortestDistance = crosses => {
    let result = Math.abs(crosses[1][0]) + Math.abs(crosses[1][1]);
    for (let i = 1; i < crosses.length; i++) {
      if (Math.abs(crosses[i][0]) + Math.abs(crosses[i][1]) < result) {
        result = Math.abs(crosses[i][0]) + Math.abs(crosses[i][1]);
      }
    }

    return result;
  };

  return shortestDistance(crosses);
};

module.exports = manhatDist;
