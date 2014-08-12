/* Jessica J. Hernandez
 ID: 0004631401
 August 11, 2014
 Week 2
 Expressions Assignment: Personal
 */

//OVERVIEW: Calculate the amount of time it will take to pay off a pending account balance with specified desired minimum payments.
alert("This program will help calculate your estimated time to pay off your pending balances on your accounts depending on your desired minimum payments you wish to send in every month.");  //Prompts the user what this program will do.



//GIVENS
var accountName = prompt("Enter the name of the account.");  //Prompts the user to enter the name of their account.

var accountBalance = parseFloat( prompt("Enter the pending balance for the " + accountName + " account.\n** Do not type the '$' sign, just the balance. **") );  //Prompts the user to enter their pending account balance and parses the information.

var minPayment = parseFloat( prompt("Enter the minimum payment amount you wish to send in to your " + accountName + " account every month.\n** Do not type the '$' sign, just the balance. **") );  //Prompts the user to enter their desired minimum payments they want to send in every month.



//RESULT VARIABLES
var months = parseInt(accountBalance / minPayment);  //Calculate how many months it will take to pay off the pending balance.

if (accountBalance % minPayment > 1)
   { months += 1; }                    //Created an if statement because if the remainder of months is greater than 1, then we have to add one more month to months for complete liquidation of the pending balance.



//RESULT TO PRINT
var message = accountName + " Payment Calculator\nPending account balance: $" + accountBalance + "\n\nIf you pay a minimum of $" + minPayment + " per month to your " + accountName + " account, you will pay off your pending balance in " + months + " months.";   //Concatenating the resulting message to a string.

console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.