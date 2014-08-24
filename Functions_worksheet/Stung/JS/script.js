/* Jessica J. Hernandez
 ID: 0004631401
 August 23, 2014
 Functions Worksheet Assignment
 Problem 2: Stung!
 */

//OVERVIEW:
var overview = "BEE STING CALCULATOR\n\nIt takes 8.6666666667 bee stings per pound to kill an animal. This program will calculate how many bee stings it will take to kill an animal depending on its weight.";    //Message to display to user about the overview of this calculation.

alert(overview);  // Display the overview message as an alert to the user.



//GIVENS:
var victimWeight = prompt( "How many pounds(lbs.) does the animal victim weigh?" );  //Prompts the user to enter a value for the victims weight in pounds. Declaring the victimWeight variable and will get defined as the weight in pounds input the user enters.

while ( victimWeight == "" || victimWeight < 0 ){  //Validation check to ensure the user did not input an empty string or a value below zero.

    victimWeight = prompt( "You've input an invalid weight in pounds for the animal victim's weight, please try again.\n\nHow many pounds(lbs.) does the animal victim weigh?" );  //If the input is invalid, this prompt will let the user know an invalid input has been collected and ask them to input the victims weight value again.

}

victimWeight = Number(victimWeight);  //Parsing the variable to a number.



//CONSTANTS:
var stingsPerPound = 8.6666666667;  //Constant variable for the number of stings per pound.



//FUNCTION:
function getStings( w ){  //Function to get the total amount of stings . The parameter will be defined as the radius of the circle when this function gets invoked.

    var stings = w * stingsPerPound;  //The calculation for the total amount of stings.

    return stings;  //Return the variable that holds the result of the total amount of stings.

}



//INVOKE THE FUNCTION:
var totalStings = getStings(victimWeight);  //The variable totalStings calls the getStings function and passes the victimWeight variable to then get defined as the returning result of the function.



//RESULT TO PRINT:
var message = "BEE STING CALCULATOR\n\nIt takes " + totalStings + " bee stings to kill an animal that has a weight of " + victimWeight + "lbs.";  //Concatenating the resulting message to a string.

console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.