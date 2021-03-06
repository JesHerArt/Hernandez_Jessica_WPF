/* Jessica J. Hernandez
 ID: 0004631401
 August 10, 2014
 Expressions Worksheet Assignment
 Problem: Slice of Pie Part 1
 */

//OVERVIEW: Calculate how many slices of pizza each partygoer will get if each pie is perfectly divided evenly among everyone and assuming each pizza pie has a standard of 8 slices.



//GIVENS
var SLICES_PER_PIE = 8;   // Constant variable; Standard number of pizza slices per pie.

var pizzasOrdered = prompt("This calculation will help determine exactly how many slices of pizza each person will receive depending on how many partygoers attend the party and how many pizzas were ordered. \n\nHow many pizza pies were ordered?");  //Prompting the user to enter the number of pizzas that were ordered.

var partyGoers = prompt("How many partygoers are at this party?");   //Prompting the user to enter how many partygoers attended the party.



//RESULT VARIABLES
var totalSlices = SLICES_PER_PIE * pizzasOrdered;   //Calculating the total amount of pizza slices available to distribute.

var slicesPerPerson = totalSlices / partyGoers;     //Calculating how many slices of pizza each person gets to eat



//RESULT TO PRINT
var message = pizzasOrdered + " pizza pies were ordered for the party.\n" + partyGoers + " partygoers attended the party.\n\nEach person ate " + slicesPerPerson + " slices of pizza at the party.";    //Concatenating the resulting message to a string.

console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.