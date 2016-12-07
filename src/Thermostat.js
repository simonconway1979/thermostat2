var DEFAULT_TEMPERATURE = 20
var MINIMUM_TEMPERATURE = 10
var POWER_SAVE_ON_MAX_TEMP = 25
var POWER_SAVE_OFF_MAX_TEMP = 32

function Thermostat() {
this.temperature = DEFAULT_TEMPERATURE;
this.maximumTemperature = POWER_SAVE_ON_MAX_TEMP;
this.powerSave = true
}

Thermostat.prototype.raiseTemperature = function() {
  if (this.temperature < this.maximumTemperature) {
    this.temperature += 1;
  } else {
    throw TypeError("Maximum temperature reached");
  }
};

Thermostat.prototype.lowerTemperature = function() {
  if (this.temperature > MINIMUM_TEMPERATURE) {
    this.temperature -= 1;
  } else {
    throw TypeError("Minimum temperature reached");
  }
};

Thermostat.prototype.changePowerSaveMode = function() {
  this.powerSave = !this.powerSave;
  if (this.powerSave === true){
    this.maximumTemperature = POWER_SAVE_ON_MAX_TEMP;
  } else {
    this.maximumTemperature = POWER_SAVE_OFF_MAX_TEMP;
  }
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = DEFAULT_TEMPERATURE
};
