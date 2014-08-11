/* Jessica J. Hernandez
   ID: 0004631401
   August 10, 2014
   Expressions Worksheet Assignment
   Problem: Dog Years
 */

// Calculate Sparky the pit bull's age in "dog years" in relation to his age in human years.
var dogYears = 7; // 1 human year is equivalent to 7 dog years
var humanYearsAge = prompt("This calculation will help see how old Sparky is in dog years. \n\nHow old is Sparky in human years?");  // Prompting the user to enter how old Sparky is in human years

var result = humanYearsAge * dogYears; // Calculating Sparky's doggy years age

var result2 = "Sparky is " + humanYearsAge + " human years old, which is " + result + " in dog years."

console.log(result2);