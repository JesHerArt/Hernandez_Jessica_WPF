/* Jessica J. Hernandez
 ID: 0004631401
 August 18, 2014
 Conditionals Worksheet Assignment
 Group 1: Celsius to Fahrenheit Converter
 */

//OVERVIEW:
alert( "TEMPERATURE CONVERSION\nThe following prompts will ask for your input to then determine the temperature conversion changes for you in either Celsius or Fahrenheit." );  //Prompts the user what the following program/script is running.



//GIVENS
var degrees = Number( prompt( "How many degrees is there outside?" ) );  //Prompts the user to enter how many degrees it is outside. The input gets parsed to a number.
var unit = prompt( "What degree unit would you like to convert to?\n\nPlease enter:\nF - To convert " + degrees + "\xB0 Celsius to Fahrenheit.\nor\nC - To convert " + degrees + "\xB0 Fahrenheit to Celsius." );  //Declare and define the variable with the



//RESULT VARIABLES
var conversion;  //Declare the conversion variable to use to store the result of the conversion being done.
var message;  //Declare the message variable to use to store the concatenated resulting message.

if ( unit === "F" || unit === "f" ){  //This if determines if the unit measurement entered is equivalent to F or f.
    conversion = Math.round( ( 9/5 * degrees + 32 ) * 100 ) / 100;  //The conversion variable gets defined to the result of the celsius to fahrenheit conversion.

    message = "The temperature " + degrees + "\xB0 Celsius is equivalent to " + conversion + "\xB0 Fahrenheit.";  //Concatenating the resulting message to a string.

}else if ( unit === "C" || unit === "c"){  //This else if determines if the unit measurement entered is equivalent to C or c.
    conversion = Math.round( ( 5/9 * (degrees - 32) ) * 100 ) / 100;  //The conversion variable gets defined to the result of the fahrenheit to celsius conversion.

    message = "The temperature " + degrees + "\xB0 Fahrenheit is equivalent to " + conversion + "\xB0 Celsius.";  //Concatenating the resulting message to a string.

}else {
    message = "You have entered an invalid unit measurement. Try again.";  //Concatenating the resulting message to a string.
}



//RESULT TO PRINT
console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.