$(document).ready(function (){
});

searchRepositories.onclick{
  
}
$.get( "", function( data ) {
  $( "body" )
    .append( "Name: " + data.name ) // John
    .append( "Time: " + data.time ); //  2pm
}, "json" );