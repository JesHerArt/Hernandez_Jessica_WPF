/* Jessica J. Hernandez
 ID: 0004631401
 August 25, 2014
 Functions Assignment: Personal
 */

//OVERVIEW:
var overview = "GAS STATION PRICE COMPARISON CALCULATOR\n\nYou need to go to the gas station to fill up your gas tank and also get a car wash.\n\nYou want to see which of the two gas stations will be cheaper to go to if you fully fill up your gas tank and get a car wash in the same gas station.";  //Message to display to user about the overview of this calculation.

alert(overview);  // Display the overview message as an alert to the user.



//GIVENS:
var gallons = prompt( "How many gallons does it take to completely fill up the gas tank in your car?" );  //Prompting the user to enter the number of gallons the gas tank holds. The variable gets declared and defined as the users input.

while( gallons == "" || gallons < 0 ){  //While-loop is used for validation if the input is an empty string or less than zero.

    gallons = prompt( "An invalid amount of gallons has been entered, please try again.\n\n\nHow many gallons does it take to completely fill up the gas tank in your car?" );  //If the the input is invalid, the user gets prompted again to enter the number of gallons the gas tank holds. The variable gets declared and defined as the users input.

}

gallons = Number(gallons);  //Parsing the variable to a number.


var gasPrice1 = prompt( "How much is Gas Station #1 charging per each gallon of gas?\n\n** Do not input the '$' symbol, just the price. **" );  //Prompting the user to enter the price for gas at the first gas station. The variable gets declared and defined as the users input.

while ( gasPrice1 == "" || gasPrice1 < 0 ){  //While-loop is used for validation if the input is an empty string or less than zero.

    gasPrice1 = prompt( "An invalid amount has been entered for the gas price, please try again.\n\n\nHow much is Gas Station #1 charging per each gallon of gas?\n\n** Do not input the '$' symbol, just the price. **" );  //If the the input is invalid, the user gets prompted again to enter the price for gas at the first gas station. The variable gets declared and defined as the users input.

}

gasPrice1 = Number(gasPrice1);  //Parsing the variable to a number.


var washPrice1 = prompt( "How much does a car wash cost at Gas Station #1\n\n** Do not input the '$' symbol, just the price. **" );  //Prompting the user to enter the price for a car wash at the first gas station. The variable gets declared and defined as the users input.

while ( washPrice1 == "" || washPrice1 < 0 ){  //While-loop is used for validation if the input is an empty string or less than zero.

    washPrice1 = prompt( "An invalid amount has been entered for the car wash price, please try again.\n\n\nHow much does a car wash cost at Gas Station #1\n\n** Do not input the '$' symbol, just the price. **" );  //If the the input is invalid, the user gets prompted again to enter the price for a car wash at the first gas station. The variable gets declared and defined as the users input.

}

washPrice1 = Number(washPrice1);  //Parsing the variable to a number.



var gasPrice2 = prompt( "How much is Gas Station #2 charging per each gallon of gas?\n\n** Do not input the '$' symbol, just the price. **" );  //Prompting the user to enter the price for gas at the second gas station. The variable gets declared and defined as the users input.

while ( gasPrice2 == "" || gasPrice2 < 0 ){  //While-loop is used for validation if the input is an empty string or less than zero.

    gasPrice2 = prompt( "An invalid amount has been entered for the gas price, please try again.\n\n\nHow much is Gas Station #2 charging per each gallon of gas?\n\n** Do not input the '$' symbol, just the price. **" );  //If the the input is invalid, the user gets prompted again to enter the price for gas at the second gas station. The variable gets declared and defined as the users input.

}

gasPrice2 = Number(gasPrice2);  //Parsing the variable to a number.


var washPrice2 = prompt( "How much does a car wash cost at Gas Station #2\n\n** Do not input the '$' symbol, just the price. **" );  //Prompting the user to enter the price for a car wash at the second gas station. The variable gets declared and defined as the users input.

while ( washPrice2 == "" || washPrice2 < 0 ){  //While-loop is used for validation if the input is an empty string or less than zero.

    washPrice2 = prompt( "An invalid amount has been entered for the car wash price, please try again.\n\n\nHow much does a car wash cost at Gas Station #2\n\n** Do not input the '$' symbol, just the price. **" );  //If the the input is invalid, the user gets prompted again to enter the price for a car wash at the second gas station. The variable gets declared and defined as the users input.

}

washPrice2 = Number(washPrice2);  //Parsing the variable to a number.



//ANONYMOUS FUNCTION:
var getTotal = function (gal, gas, carWash){  //Anonymous function gets declared to a variable. Has 3 parameters: gallons, gas price, and car wash price.

    var total = Math.round( (gal * gas + carWash) * 100 ) /100; //The total variable will store the calculation of how much is spent at the gas station depending on the 3 parameters of the function.
    return total;  //Return the total.

}



//INVOKING THE FUNCTION:
var total1 = getTotal(gallons, gasPrice1, washPrice1);  //Calling the function to get the total cost at the first gas station.
var total2 = getTotal(gallons, gasPrice2, washPrice2);  //Calling the function to get the total cost at the second gas station.



//RESULTS:
var message = "GAS STATION PRICE COMPARISON CALCULATOR\n\n";  //Declaring and initially defining the message variable to store the header of the message that will be shown to the user at the end of the program.
var savings;  //Declaring the savings variable to later store the actual savings from the difference in prices.

if ( total1 < total2 ){  //Determines if the total cost for gas station 1 is less than gas station 2.

    savings = Math.round( (total2 - total1) * 100 ) / 100;  //Savings gets defined to the total savings from going to gas station 1 instead of gas station 2. The result also gets rounded to two decimal places.

    message += "At a total price of $" + total1.toFixed(2) + ", Gas Station #1 would offer a lower price to fill up your " + gallons + " gallon gas tank ($" + gasPrice1.toFixed(2) + "/gallon) and also get a cash wash ($" + washPrice1.toFixed(2) + ").\n\nTotal Savings: $" + savings;  //Concatenating the rest of the resulting message to a string.

}else if ( total1 > total2 ){  //Determines if the total cost for gas station 1 is greater than gas station 2.

    savings = Math.round( (total1 - total2) * 100 ) / 100;  //Savings gets defined to the total savings from going to gas station 2 instead of gas station 1. The result also gets rounded to two decimal places.

    message += "At a total price of $" + total2.toFixed(2) + ", Gas Station #2 would offer a lower price to fill up your " + gallons + " gallon gas tank ($" + gasPrice2.toFixed(2) + "/gallon) and also get a cash wash ($" + washPrice2.toFixed(2) + ").\n\nTotal Savings: $" + savings;  //Concatenating the rest of the resulting message to a string.

}else{  //If the if or the else if statements are false, than both prices must be the same value and this else is the default result of the conditional.

    message += "At a total price of $" + total2.toFixed(2) + ", BOTH Gas Station #1 and Gas Station #2 offer the same price to fill up your " + gallons + " gallon gas tank and also get a cash wash.";  //Concatenating the rest of the resulting message to a string.

}



//RESULTS TO PRINT:
console.log(message);   // Display the final message in the console.

alert(message);         // Display the final message as an alert to the user.