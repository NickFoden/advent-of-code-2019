const FuelCounterUpper = fuel => {
  let total = 0;
  fuel.forEach(item => (total += Math.floor(item / 3) - 2));
  return total;
};

module.exports = FuelCounterUpper;
