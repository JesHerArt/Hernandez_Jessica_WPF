/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 20, 2014
 Week 3
 Conditionals Assignment: Wacky
 */

//OVERVIEW:
var overview = "MONTHLY CAR EXPENSES CALCULATOR\n\nYou are at the car dealer and you want to buy a new car. The special financing deal at the moment is that you can buy any vehicle and pay a flat monthly payment of $295.00 a month, regardless of which model you buy (this includes the luxury class vehicles as well).\n\nAlthough the monthly finance payment is $295.00 per month, your car insurance company's monthly premium would be based on the total value of the vehicle.\n\nYou want to find out if your monthly car budget can cover the car expenses of owning a new vehicle along with the corresponding car insurance payments.";  //Message to display to user about the overview of this calculation.

alert(overview);  // Display the overview message as an alert to the user.



//CONSTANTS:
var carFinance = 295.00;  //Flat financing price for any vehicle as the special financing price by the dealer.

var value0 = 0;      //Car value of $0.00
var value1 = 20000;  //Car value of $20,000.00
var value2 = 40000;  //Car value of $40,000.00
var value3 = 60000;  //Car value of $60,000.00
var value4 = 80000;  //Car value of $80,000.00

var tier1 = 150.00;  //Tier 1 insurance cost for car values up to $20,000.00
var tier2 = 225.00;  //Tier 2 insurance cost for car values between $20,000.00 and $40,000.00
var tier3 = 300.00;  //Tier 3 insurance cost for car values between $40,000.00 and $60,000.00
var tier4 = 415.00;  //Tier 4 insurance cost for car values between $60,000.00 and $80,000.00
var tier5 = 525.00;  //Tier 4 insurance cost for car values over $80,000.00



//GIVENS:
var budget = prompt( "What is your monthly budget for use on car related monthly payments?\n\n** Do not input the '$' symbol, just the amount. Ex: 350.00. **" );  //Declaring and defining the budget variable with the user's input.

if ( budget === "" ){  //Budget input validation.

    budget = prompt( "You've input an invalid Budget amount, please try again.\n\nWhat is your monthly budget for use on car related monthly payments?\n\n** Do not input the '$' symbol, just the amount. Ex: 350.00. **" );  //Prompt the user an invalid input for budget was made. Declare and define the budget variable with the user's input.

}

budget = parseFloat( budget );  //Parsing the budget input as a double variable.


var carValue = prompt( "What is the total value of the vehicle you want to finance?\n\n** Do not input the '$' symbol, just the amount. Ex: 18000.00. **" );  //Declaring and defining the carValue variable with the user's input.

if ( carValue == "" || carValue < value0 ){  //Car value input validation.

    carValue = prompt( "You've input an invalid Car Value amount, please try again.\n\nWhat is the total value of the vehicle you want to finance?\n\n** Do not input the '$' symbol, just the amount. Ex: 18000.00. **" );  //Prompt the user an invalid input for carValue was made. Declare and define the carValue variable with the user's input.

}

carValue = parseFloat( carValue );  //Parsing the car value input as a double variable.



//RESULT VARIABLES:
var tier;  //Declare the tier variable to store which tier level the insurance cost is to later display to the user.

var insuranceCost;  //Declare the insurance cost variable to store the tier level cost for insurance based on the vehicle's value.

if ( carValue < value1 ){  //Determine if the car value is less than $20,000.00

    insuranceCost = tier1;  //Define the insurance cost variable to a tier 1 cost of $150.00
    tier = 1;  //Tier level is 1.

}else if ( carValue > value1 && carValue < value2 ){  //Determine if the car value is between $20,000.00 and $40,000.00

    insuranceCost = tier2;  //Define the insurance cost variable to a tier 1 cost of $225.00
    tier = 2;  //Tier level is 2.

}else if ( carValue > value2 && carValue < value3 ){  //Determine if the car value is between $40,000.00 and $60,000.00

    insuranceCost = tier3;  //Define the insurance cost variable to a tier 1 cost of $300.00
    tier = 3;  //Tier level is 3.

}else if ( carValue > value3 && carValue < value4 ){  //Determine if the car value is between $60,000.00 and $80,000.00

    insuranceCost = tier4;  //Define the insurance cost variable to a tier 1 cost of $415.00
    tier = 4;  //Tier level is 4.

}else {  //Otherwise the car value is above $80,000.00

    insuranceCost = tier5;    //Define the insurance cost variable to a tier 1 cost of $525.00
    tier = 5;  //Tier level is 5.

}

var monthlyTotalCarCost = carFinance + insuranceCost;  //Calculate the total monthly car cost by adding the car financing cost and the insurance cost.

var payOffTime = parseInt( Math.round ( (carValue / carFinance) * 100 ) / 100 );  //Parse the pay off time result to and int and round it.

if ( carValue % carFinance > 0 ){  //Determine if the remainder of the pay off time is greater than 0.

    payOffTime += 1;  //Therefore, pay off time gets increased by one.

}



//RESULT TO PRINT:
var message;  //Declare the message variable that will store the concatenated resulting message.

if ( monthlyTotalCarCost > budget ){  //Determine if the total monthly cost is greater than the budget.

    message = "MONTHLY CAR EXPENSES CALCULATOR\n\nSorry, but at this moment your monthly car expenses budget ($" + budget.toFixed(2) + ") cannot cover the total monthly car expenses cost of $" + monthlyTotalCarCost.toFixed(2) + ", which includes the vehicle financing payments of $295.00 plus the tier " + tier + " insurance payment cost of $" + insuranceCost.toFixed(2) + ".";  //Concatenating the resulting message to a string if the monthly total cost is greater than the budget.

}else {  //Otherwise the total monthly car cost is less than the budget and can be afforded.

    message = "MONTHLY CAR EXPENSES CALCULATOR\n\nCongratulations! You will be able to afford a new car and the corresponding monthly car insurance payments according to your estimated monthly car expenses budget.\n\nBudget ..................................... $" + budget.toFixed(2) + "\nCar Value ................................. $" + carValue.toFixed(2) + "\nCar Finance .............................. $" + carFinance.toFixed(2) + "\nInsurance Cost (Tier " + tier + ") ............. $" + insuranceCost.toFixed(2) + "\n\nTotal Monthly Car Expenses ...... $" + monthlyTotalCarCost.toFixed(2) + "\n\nIf you send in the minimum car financing payment each month, you will be able to pay off your car in full in " + payOffTime + " months.";  //Concatenating the resulting message to a string when the total monthly car cost is less than the budget.

}

console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.