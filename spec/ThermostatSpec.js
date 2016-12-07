describe("Thermostat", function() {

  var thermostat;


  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("It should have a default start temperature of 20°C", function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it("Should raise by 1°C when when raise temperature is called", function() {
    thermostat.raiseTemperature()
    expect(thermostat.temperature).toEqual(DEFAULT_TEMPERATURE+1)
  });

  it("should decrease by 1°C when when lower temperature is called", function(){
    thermostat.lowerTemperature()
    expect(thermostat.temperature).toEqual(DEFAULT_TEMPERATURE-1)
  });

  it("should throw error when lower temperature is called and temperature is at or below the minimum temperature", function(){
    thermostat.temperature = 10
    expect(function(){ thermostat.lowerTemperature(); }).toThrowError("Minimum temperature reached")
  });


});
