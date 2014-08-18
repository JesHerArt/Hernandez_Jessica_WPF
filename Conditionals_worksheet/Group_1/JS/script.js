/* Jessica J. Hernandez
 ID: 0004631401
 August 18, 2014
 Conditionals Worksheet Assignment
 Group 1: Celsius to Fahrenheit Converter
 */

//OVERVIEW:



//GIVENS
var degrees = parseInt( prompt( "How many degrees is there outside?" ) );
var unit = prompt( "What degree unit would you like to convert to?\n\nPlease enter:\nF - To convert " + degrees + "\xB0 Celsius to Fahrenheit.\nor\nC - To convert " + degrees + "\xB0 Fahrenheit to Celsius." );



//RESULT VARIABLES
var conversion;
var message;

if ( unit === "F" || unit === "f" ){
    conversion = 9/5 * (degrees + 32);

    message = "The temperature " + degrees + "\xB0 Celsius is equivalent to " + conversion + "\xB0 Fahrenheit.";  //Concatenating the resulting message to a string.

}else if ( unit === "C" || unit === "c"){
    conversion = 5/9 * (degrees - 32);

    message = "The temperature " + degrees + "\xB0 Fahrenheit is equivalent to " + conversion + "\xB0 Celsius.";  //Concatenating the resulting message to a string.

}else {
    message = "You have entered an invalid unit measurement. Try again.";  //Concatenating the resulting message to a string.
}



//RESULT TO PRINT
console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.