/* Jessica J. Hernandez
 ID: 0004631401
 August 10, 2014
 Expressions Worksheet Assignment
 Problem: Slice of Pie Part 2
 */

// Calculate how many leftover slices of pizza Sparky, the host's dog, will get after each partygoer receives their equal whole slice portion of pizza, while each pizza pie has a standard of 8 slices.
var SLICES_PER_PIE = 8;   // Constant variable; Standard number of pizza slices per pie.

var pizzasOrdered = prompt("This calculation will help determine exactly how many leftover slices of pizza Sparky, the party host's dog, will get after each person receives their equal whole slice portion of pizza. This depends on how many partygoers attend the party and how many pizza pies were ordered. \n\nHow many pizza pies were ordered for the party?");  //Prompting the user to enter the number of pizzas that were ordered.
var partyGoers = prompt("How many partygoers attended the party?");   //Prompting the user to enter how many partygoers attended the party.

var totalSlices = SLICES_PER_PIE * pizzasOrdered;   //Calculating the total amount of pizza slices available to distribute.
var slicesPerPerson = parseInt(totalSlices / partyGoers);     //Calculating how many slices of pizza each person gets to eat.
var sparkySlices = totalSlices % partyGoers;

var message = pizzasOrdered + " pizza pies were ordered for the party.\n" + partyGoers + " partygoers attended the party.\nEach person ate an equal amount of " + slicesPerPerson + " whole slices of pizza at the party.\n\nSparky got to eat " + sparkySlices + " leftover slices of pizza";    //Concatenating the resulting message to a string.

console.log(message);   // Display the resulting message in the console.
alert(message);         // Display the resulting message as an alert to the user.