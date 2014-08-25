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