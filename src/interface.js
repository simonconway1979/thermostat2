var thermostat = new Thermostat();
var raisetemp = $('#raisetemp');
var lowertemp = $('#lowertemp');
var reset = $('#reset');
var powersavestatus = $('#powersavestatus');
var powersavetoggle = $('#powersavetoggle');
var currenttemp = $('#currenttemp');
var energyusage = $('#energyusage');
var weather = $('#weather');


$( document ).ready(function() {
  currenttemp.text(thermostat.showTemperature());
  energyusage.text(thermostat.energyUsage());
  powersavestatus.text(thermostat.showPowerSaveMode());
  $.get('http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=669388914f66619c340185cc202f2758&units=metric', function(data) {
    $('#weather').text(data.main.temp);
  });
});


raisetemp.click(function (event) {
  thermostat.raiseTemperature();
  currenttemp.text(thermostat.showTemperature());
  energyusage.text(thermostat.energyUsage());
});

  $('#currentcity').change(function() {
    var city = $('#currentcity').val();
      console.log(city);

    $.get('http://api.openweathermap.org/data/2.5/weather?id=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#weather').text(data.main.temp)
  })
});


lowertemp.click(function (event) {
  thermostat.lowerTemperature();
  currenttemp.text(thermostat.showTemperature());
  energyusage.text(thermostat.energyUsage());
});

reset.click(function (event) {
  thermostat.resetTemperature();
  currenttemp.text(thermostat.showTemperature());
  energyusage.text(thermostat.energyUsage());
});

powersavetoggle.click(function (event) {
  thermostat.changePowerSaveMode();
  powersavestatus.text(thermostat.showPowerSaveMode());
  energyusage.text(thermostat.energyUsage());
});
