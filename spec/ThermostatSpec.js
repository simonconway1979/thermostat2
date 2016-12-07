describe("Thermostat", function() {

  var thermostat;


  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("It should have a default start temperature of 20°C", function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it("Should raise by 1°C when when raise temperature is called", function() {
    expect(thermostat.raiseTemperature()).toEqual(DEFAULT_TEMPERATURE+1)
  });




});
