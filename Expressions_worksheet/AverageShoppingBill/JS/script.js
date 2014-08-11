/* Jessica J. Hernandez
 ID: 0004631401
 August 10, 2014
 Expressions Worksheet Assignment
 Problem: Average Shopping Bill
 */

// REMINDER: ADD IN MY COMMENTS FOR EACH LINE

var grocerySpending = new Array(5);   //Creating the array to hold the grocery spending data for the last 5 weeks.

grocerySpending[0] = prompt("");
grocerySpending[1] = prompt("Enter the amount spent on groceries in week 2.");  //Prompting the user to enter the amount of money spent on groceries on week 2.
grocerySpending[2] = prompt("Enter the amount spent on groceries in week 3.");  //Prompting the user to enter the amount of money spent on groceries on week 3.
grocerySpending[3] = prompt("Enter the amount spent on groceries in week 4.");  //Prompting the user to enter the amount of money spent on groceries on week 4.
grocerySpending[4] = prompt("Enter the amount spent on groceries in week 5.");  //Prompting the user to enter the amount of money spent on groceries on week 5.

var total = grocerySpending[0] + grocerySpending[1] + grocerySpending[2] + grocerySpending[3] + grocerySpending[4];   //Calculating the total grocery spending for the previous five weeks.
var average = total / 5;   //Calculating the average grocery spending for the last five weeks.

var message = "You have spent a total of $" + total + " on groceries over 5 weeks.\nThat is an average of $" + average + " per week.";    //Concatenating the resulting message to a string.

console.log(message);   // Display the resulting message in the console.
alert(message);         // Display the resulting message as an alert to the user.