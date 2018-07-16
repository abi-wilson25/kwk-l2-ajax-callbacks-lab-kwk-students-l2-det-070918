$(document).ready(function (){
});

$.ajax({
  url: ,
  data: data,
  success: success,
  dataType: dataType
});
  
}
$.get( "", function( ) {
  $( "body" )
    .append( "Name: " + data.name ) // John
    .append( "Time: " + data.time ); //  2pm
}, "json" );