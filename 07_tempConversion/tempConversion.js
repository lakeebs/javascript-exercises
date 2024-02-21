const convertToCelsius = function(fTemp) {

  let cTemp = ((fTemp - 32) * (5/9)).toFixed(1);

  return Number(cTemp);

};

const convertToFahrenheit = function(cTemp) {

  let fTemp = ((cTemp * (9/5)) + 32).toFixed(1);

  return Number(fTemp);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
