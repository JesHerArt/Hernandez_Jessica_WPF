/* Jessica J. Hernandez
 ID: 0004631401
 August 23, 2014
 Functions Worksheet Assignment
 Problem 2: Stung!
 */

//OVERVIEW:
var overview = "BEE STINGS\n\nIt takes 8.6666666667 bee stings per pound to kill an animal. This program will calculate how many bee stings it will take to kill an animal depending on its weight.";

alert(overview);



//GIVENS:
var victimWeight = prompt( "How many pounds(lbs.) does the animal victim weigh?" );

while ( victimWeight == "" || victimWeight < 0 ){

    victimWeight = prompt( "You've input an invalid weight in pounds for the animal victim's weight, please try again.\n\nHow many pounds(lbs.) does the animal victim weigh?" );

}

victimWeight = Number(victimWeight);



//CONSTANTS:
var stingsPerPound = 8.6666666667;



