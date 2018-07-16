$(document).ready(function (){
});


  
}
$.get( "", function( ) {
  $( "body" )
    .append( "Name: " + data.name ) // John
    .append( "Time: " + data.time ); //  2pm
}, "json" );