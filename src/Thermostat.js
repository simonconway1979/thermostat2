var DEFAULT_TEMPERATURE = 20
var MINIMUM_TEMPERATURE = 10

function Thermostat() {
this.temperature = DEFAULT_TEMPERATURE;
}

Thermostat.prototype.raiseTemperature = function() {
  this.temperature += 1;
};

Thermostat.prototype.lowerTemperature = function() {
  if (this.temperature > MINIMUM_TEMPERATURE) {
  this.temperature -= 1;
  } else {
  throw TypeError("Minimum temperature reached");
  }
};
