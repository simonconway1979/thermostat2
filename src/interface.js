var thermostat = new Thermostat();
var raisetemp = $('#raisetemp');
var lowertemp = $('#lowertemp');
var reset = $('#reset');
var powersavestatus = $('#powersavestatus');
var powersavetoggle = $('#powersavetoggle');
var currenttemp = $('#currenttemp');
var eneryusage = $('#energyusage');


raisetemp.click(function (event) {
thermostat.raiseTemperature();
currenttemp.text(thermostat.showTemperature());
});

lowertemp.click(function (event) {
thermostat.lowerTemperature();
currenttemp.text(thermostat.showTemperature());
});

reset.click(function (event) {
thermostat.resetTemperature();
currenttemp.text(thermostat.showTemperature());
});

powersavetoggle.click(function (event) {
thermostat.changePowerSaveMode();
powersavestatus.text(thermostat.showPowerSaveMode());
});
