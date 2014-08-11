/* Jessica J. Hernandez
 ID: 0004631401
 August 10, 2014
 Expressions Worksheet Assignment
 Problem: Average Shopping Bill
 */

// REMINDER: ADD IN MY COMMENTS FOR EACH LINE

var grocerySpending = [];

grocerySpending[0] = prompt("");
grocerySpending[1] = prompt("Enter the amount spent on groceries in week 2.");
grocerySpending[2] = prompt("Enter the amount spent on groceries in week 3.");
grocerySpending[3] = prompt("Enter the amount spent on groceries in week 4.");
grocerySpending[4] = prompt("Enter the amount spent on groceries in week 5.");

var total = grocerySpending[0] + grocerySpending[1] + grocerySpending[2] + grocerySpending[3] + grocerySpending[4];
var average = total / 5;

var message = "You have spent a total of $" + total + " on groceries over 5 weeks.\nThat is an average of $" + average + " per week.";

console.log(message);
alert(message);