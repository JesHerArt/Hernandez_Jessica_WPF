/* Jessica J. Hernandez
 ID: 0004631401
 August 25, 2014
 Functions Assignment: Personal
 */

//OVERVIEW:
var overview = "GAS STATION PRICE COMPARISON CALCULATOR\n\nYou need to go to the gas station to fill up your gas tank and also get a car wash.\nYou want to see which of the two gas stations will be cheaper to go to if you fully fill up your gas tank and get a car wash in the same gas station.";

alert(overview);



//GIVENS:
var gallons = prompt( "How many gallons does it take to completely fill up the gas tank in your car?" );

while( gallons == "" || gallons < 0 ){

    gallons = prompt( "An invalid amount of gallons has been entered, please try again.\n\n\nHow many gallons does it take to completely fill up the gas tank in your car?" );

}

gallons = Number(gallons);

var gasPrice1 = prompt( "How much is Gas Station #1 charging per each gallon of gas?\n\n** Do not input the '$' symbol, just the price. **" );

while ( gasPrice1 == "" || gasPrice1 < 0 ){

    gasPrice1 = prompt( "An invalid amount has been entered for the gas price, please try again.\n\n\nHow much is Gas Station #1 charging per each gallon of gas?\n\n** Do not input the '$' symbol, just the price. **" );

}

gasPrice1 = Number(gasPrice1);

var washPrice1 = prompt( "How much does a car wash cost at Gas Station #1\n\n** Do not input the '$' symbol, just the price. **" );

while ( washPrice1 == "" || washPrice1 < 0 ){

    washPrice1 = prompt( "An invalid amount has been entered for the car wash price, please try again.\n\n\nHow much does a car wash cost at Gas Station #1\n\n** Do not input the '$' symbol, just the price. **" );

}

washPrice1 = Number(washPrice1);


var gasPrice2 = prompt( "How much is Gas Station #2 charging per each gallon of gas?\n\n** Do not input the '$' symbol, just the price. **" );

while ( gasPrice2 == "" || gasPrice2 < 0 ){

    gasPrice2 = prompt( "An invalid amount has been entered for the gas price, please try again.\n\n\nHow much is Gas Station #2 charging per each gallon of gas?\n\n** Do not input the '$' symbol, just the price. **" );

}

gasPrice2 = Number(gasPrice2);

var washPrice2 = prompt( "How much does a car wash cost at Gas Station #2\n\n** Do not input the '$' symbol, just the price. **" );

while ( washPrice2 == "" || washPrice2 < 0 ){

    washPrice2 = prompt( "An invalid amount has been entered for the car wash price, please try again.\n\n\nHow much does a car wash cost at Gas Station #2\n\n** Do not input the '$' symbol, just the price. **" );

}

washPrice2 = Number(washPrice2);



//ANONYMOUS FUNCTION:
var getTotal = function (gal, gas, carWash){

    var total = gal * gas + carWash;
    return total;

}



//INVOKING THE FUNCTION:
var total1 = getTotal(gallons, gasPrice1, washPrice1);
var total2 = getTotal(gallons, gasPrice2, washPrice2);



//RESULTS:
var message = "GAS STATION PRICE COMPARISON CALCULATOR\n\n";
var savings;

if ( total1 < total2 ){

    savings = total2 - total1;

    message += "At a total price of $" + total1 + ", Gas Station #1 would offer a lower price ($" + gasPrice1 + ") to fill up your " + gallons + " gallon gas tank and also get a cash wash ($" + washPrice1 + ").\n\nTotal Savings: $" + savings;

}else if ( total1 > total2 ){

    savings = total1 - total2;

    message += "At a total price of $" + total2 + ", Gas Station #1 would offer a lower price ($" + gasPrice2 + ") to fill up your " + gallons + " gallon gas tank and also get a cash wash ($" + washPrice2 + ").\n\nTotal Savings: $" + savings;

}else{

    message += "At a total price of $" + total2 + ", both Gas Station #1 and Gas Station #2 offer the same price ($" + gasPrice2 + ") to fill up your " + gallons + " gallon gas tank and also get a cash wash ($" + washPrice2 + ").";

}



//RESULTS TO PRINT:
console.log(message);   // Display the final message in the console.

alert(message);         // Display the final message as an alert to the user.