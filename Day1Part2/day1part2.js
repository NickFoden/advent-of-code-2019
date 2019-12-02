const calculateFuel = mass => Math.floor(mass / 3) - 2;

const fuelCounterUpper = fuel => {
  let total = 0;

  fuel.forEach(item => {
    let current = item;
    while (calculateFuel(current) > 0) {
      total += calculateFuel(current);
      current = calculateFuel(current);
    }
  });

  return total;
};

module.exports = fuelCounterUpper;
