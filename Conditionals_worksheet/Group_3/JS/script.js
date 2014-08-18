/* Jessica J. Hernandez
 ID: 0004631401
 August 18, 2014
 Conditionals Worksheet Assignment
 Group 3: Tire Pressure 1
 */

//OVERVIEW:
alert( "TIRE PRESSURE SPEC CHECK\nThe following prompts will ask you to enter the tire pressure (in PSI) of each tire to then determine if your tires pass spec or if they need to be checked out." );  //Prompts the user what the following program/script is running.



//GIVENS
var tirePressure = new Array(4);

tirePressure[0] = parseInt( prompt( "Please input the tire pressure (in PSI) of the first front (driver's side) tire." ) );

tirePressure[1] = parseInt( prompt( "Please input the tire pressure (in PSI) of the second front (passenger's side) tire." ) );

tirePressure[2] = parseInt( prompt( "Please input the tire pressure (in PSI) of the first back (driver's side) tire." ) );

tirePressure[3] = parseInt( prompt( "Please input the tire pressure (in PSI) of the second back (passenger's side) tire." ) );



//RESULT VARIABLES
var specCheckResult;




//RESULT TO PRINT
var message = "";   //Concatenating the resulting message to a string.

console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.