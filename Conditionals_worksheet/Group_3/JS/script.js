/* Jessica J. Hernandez
 ID: 0004631401
 August 18, 2014
 Conditionals Worksheet Assignment
 Group 3: Tire Pressure 1
 */

//OVERVIEW:
alert( "TIRE PRESSURE SPEC CHECK\nThe following prompts will ask you to enter the tire pressure (in psi) of each tire to then determine if your tires pass spec according to maintenance standards or if they need to be checked out." );  //Prompts the user what the following program/script is running.



//GIVENS
var tirePressure = new Array(4);  //Declare the variable of the array that will be used to store the tire pressure of each tire.

tirePressure[0] = parseInt( prompt( "Please input the tire pressure (in psi) of the first front (driver's side) tire." ) );  //Prompts the user to enter the psi tire pressure of the first front tire and parses to an int.

tirePressure[1] = parseInt( prompt( "Please input the tire pressure (in psi) of the second front (passenger's side) tire." ) );  //Prompts the user to enter the psi tire pressure of the second front tire and parses to an int.

tirePressure[2] = parseInt( prompt( "Please input the tire pressure (in psi) of the first back (driver's side) tire." ) );  //Prompts the user to enter the psi tire pressure of the first back tire and parses to an int.

tirePressure[3] = parseInt( prompt( "Please input the tire pressure (in psi) of the second back (passenger's side) tire." ) );  //Prompts the user to enter the psi tire pressure of the second back tire and parses to an int.



//RESULT VARIABLES
var specCheckResult;  //Declare the variable to run through the ternary condition statement.

specCheckResult = ( tirePressure[0] === tirePressure[1] && tirePressure[2] === tirePressure[3] ) ? "The tires pass spec!" : "Get your tires checked out!";  //The ternary condition statement determines if the front two tires have the same pressure and the back two tires have the same pressure to then determine what is the resulting message the user will receive about the specs of their tires.



//RESULT TO PRINT
console.log(specCheckResult);   // Display the resulting message in the console.

alert(specCheckResult);         // Display the resulting message as an alert to the user.