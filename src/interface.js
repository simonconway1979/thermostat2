thermostat = new Thermostat();


window.onload = function() {
    alert( "Your mum says" );

    $( "#increasetemp" ).click(function( event ) {

      alert( "Thanks for visiting!" );

    });
};





  $( "#decreasetemp" ).click(function( event ) {

    event.preventDefault();

    $( this ).hide( "slow" );

});
