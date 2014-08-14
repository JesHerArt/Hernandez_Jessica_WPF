/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 11, 2014
 Week 2
 Expressions Assignment: Personal
 */

//OVERVIEW: Calculate the amount of time it will take to pay off a pending account balance with specified desired minimum payments.
alert("This program will help calculate your estimated time to pay off your pending balance on your accounts depending on your desired minimum payments you wish to send in every month.");  //Prompts the user what this program will do.



//GIVENS
var accountName = prompt("Enter the name of the account.");  //Prompts the user to enter the name of their account.

var accountBalance = parseFloat( prompt("Enter the pending balance for the " + accountName + " account.\n** Do not type the '$' sign, just the balance. **") );  //Prompts the user to enter their pending account balance and parses the information.

var minPayment = parseFloat( prompt("Enter the minimum payment amount you wish to send in to your " + accountName + " account every month.\n** Do not type the '$' sign, just the balance. **") );  //Prompts the user to enter their desired minimum payments they want to send in every month.

var payOffEstimate = parseInt( prompt("In how many months do you wish/plan to pay off your full balance?") );  //Prompts the user to enter in how many months that would like to pay off their balance.



//RESULT VARIABLES
var months = parseInt(accountBalance / minPayment);  //Calculate how many months it will take to pay off the pending balance.

if (accountBalance % minPayment > 1)
   { months += 1; }                    //Created an if-statement because if the remainder of months is greater than 1, then we have to add one more month to months for complete liquidation of the pending balance.

var payOffResult;  //This variable will be defined depending on the if-statement that gets executed below.

if ( payOffEstimate > months )
   { payOffResult = "Therefore, you will be able to pay your balance off sooner the " + payOffEstimate + " months time frame you originally hoped for. Good budgeting!"; }  //This if-statement displays the resulting message if the month calculation is less than the users' estimated pay off month time period.

if ( payOffEstimate < months )
   { payOffResult = "Unfortunately, you will not be able to pay off your balance in the " + payOffEstimate + " months time frame you originally hoped for. Increasing your minimum monthly payment amount will allow you to pay off your balance sooner.";}  //This if-statement displays the resulting message if the month calculation is greater than the users' estimated pay off month time period.



//RESULT TO PRINT
var message = accountName + " Payment Calculator\nPending account balance: $" + accountBalance + "\n\nIf you pay a minimum of $" + minPayment + " per month to your " + accountName + " account, you will pay off your pending balance in " + months + " months.\n\n" + payOffResult;   //Concatenating the resulting message to a string.

console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.