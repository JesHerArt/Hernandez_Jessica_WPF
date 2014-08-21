/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 20, 2014
 Week 3
 Conditionals Assignment: Wacky
 */

//OVERVIEW:
var overview = "MONTHLY CAR EXPENSES CALCULATOR\n\nYou are at the car dealer and you want to buy a new car. The special financing deal at the moment is that you can buy any vehicle and pay a flat monthly payment of $295.00 a month, regardless of which model you buy (this includes the luxury class vehicles as well).\n\nAlthough the monthly finance payment is $295.00 per month, your car insurance company's monthly premium would be based on the total value of the vehicle.\n\nYou want to find out if your monthly car budget can cover the car expenses of owning a new vehicle along with the corresponding car insurance payments.";

alert(overview);



//CONSTANTS:
var carFinance = 295.00;

var value0 = 0;
var value1 = 20000;
var value2 = 40000;
var value3 = 60000;
var value4 = 80000;

var tier1 = 150.00;
var tier2 = 225.00;
var tier3 = 300.00;
var tier4 = 415.00;
var tier5 = 525.00;



//GIVENS:
var budget = prompt( "What is your monthly budget for use on car related monthly payments?\n\n** Do not put the '$' symbol, just the amount. Ex: 350.00. **" );

if ( budget === "" ){  //Validation

    budget = prompt( "You've input an invalid Budget amount, please try again.\n\nWhat is your monthly budget for use on car related monthly payments?\n\n** Do not put the '$' symbol, just the amount. Ex: 350.00. **" );

}

budget = parseFloat( budget );


var carValue = prompt( "What is the total value of the vehicle you want to finance?\n\n** Do not put the '$' symbol, just the amount. Ex: 18000.00. **" );

if ( carValue == "" || carValue < value0 ){  //Validation

    carValue = prompt( "You've input an invalid Car Value amount, please try again.\n\nWhat is the total value of the vehicle you want to finance?\n\n** Do not put the '$' symbol, just the amount. Ex: 18000.00. **" );

}

carValue = parseFloat( carValue );



//RESULT VARIABLES:
var tier;

var insuranceCost;

if ( carValue < value1 ){

    insuranceCost = tier1;
    tier = 1;

}else if ( carValue > value1 && carValue < value2 ){

    insuranceCost = tier2;
    tier = 2;

}else if ( carValue > value2 && carValue < value3 ){

    insuranceCost = tier3;
    tier = 3;

}else if ( carValue > value3 && carValue < value4 ){

    insuranceCost = tier4;
    tier = 4;

}else {

    insuranceCost = tier5;
    tier = 5;

}

var monthlyTotalCarCost = carFinance + insuranceCost;

var payOffTime = parseInt( Math.round ( (carValue / carFinance) * 100 ) / 100 );

if ( carValue % carFinance > 0 ){

    payOffTime += 1;

}



//RESULT TO PRINT:
var message;
if ( monthlyTotalCarCost > budget ){

    message = "MONTHLY CAR EXPENSES CALCULATOR\n\nSorry, but at this moment your monthly car expenses budget ($" + budget.toFixed(2) + ") cannot cover the total monthly car expenses cost of $" + monthlyTotalCarCost.toFixed(2) + ", which includes the vehicle financing payments of $295.00 plus the tier " + tier + " insurance payment cost of $" + insuranceCost.toFixed(2) + ".";  //Concatenating the resulting message to a string.

}else {

    message = "MONTHLY CAR EXPENSES CALCULATOR\n\nCongratulations! You will be able to afford a new car and the corresponding monthly car insurance payments according to your estimated monthly car expenses budget.\n\nBudget ..................................... $" + budget.toFixed(2) + "\nCar Value ................................. $" + carValue.toFixed(2) + "\nCar Finance .............................. $" + carFinance.toFixed(2) + "\nInsurance Cost (Tier " + tier + ") ............. $" + insuranceCost.toFixed(2) + "\n\nTotal Monthly Car Expenses ...... $" + monthlyTotalCarCost.toFixed(2) + "\n\nif you send in the minimum car financing payment each month, you will be able to pay off your car in full in " + payOffTime + " months.";  //Concatenating the resulting message to a string.

}

console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.