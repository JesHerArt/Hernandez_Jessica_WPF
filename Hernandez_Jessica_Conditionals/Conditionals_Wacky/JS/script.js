/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 20, 2014
 Week 3
 Conditionals Assignment: Wacky
 */

//OVERVIEW:
alert( "MONTHLY CAR EXPENSES CALCULATOR\n\nYou are at the car dealer and you want to buy a new car. The special financing deal at the moment is that you can buy any vehicle and pay a flat monthly payment of $295.00 a month, regardless of which model you buy (this includes the luxury class vehicles as well.\n\nAlthough the monthly finance payment is $295.00 per month, your car insurance company's monthly premium would be based on the total value of the vehicle.\n\nYou want to find out if your monthly car budget can cover the car expenses of owning a new vehicle along with the car insurance." );



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
var budget = parseFloat( prompt( "What is your monthly budget for use on car related monthly payments?" ) );

if ( budget === "" ){  //Validation
    budget = parseFloat( prompt( "You've input an invalid Budget amount, please try again.\n\nWhat is your monthly budget for use on car related monthly payments?" ) );
}

var carValue = parseFloat( prompt( "What is the total value of the vehicle you want to finance?" ) );

if ( carValue === "" || carValue < value0 ){  //Validation
    carValue = parseFloat( prompt( "You've input an invalid Car Value amount, please try again.\n\nWhat is the total value of the vehicle you want to finance?" ) );
}



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
var payOffTime = carValue / carFinance;