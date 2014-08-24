/* Jessica J. Hernandez
 ID: 0004631401
 August 23, 2014
 Functions Worksheet Assignment
 Problem 1: Circumference
 */

//OVERVIEW:
var overview = "CIRCUMFERENCE CALCULATOR\n\nWhen you provide the radius of a circle, this program will calculate the circumference of the circle for you.";    //Message to display to user about the overview of this calculation.

alert(overview);  // Display the overview message as an alert to the user.



//GIVENS:
var radius = prompt( "What is the radius of the circle?" );  //Prompts the user to enter a value for the circle radius. Declaring the radius variable and will get defined as the radius input the user enters.

while ( radius == "" || radius < 0 ){  //Validation check to ensure the user did not input an empty string or a value below zero.

    radius = prompt( "You've input an invalid length for the radius, please try again.\n\nWhat is the radius of the circle?" );  //If the input is invalid, this prompt will let the user know an invalid input has been collected and ask them to input the radius value again.

}

radius = Number(radius);  //Parsing the variable to a number.



//FUNCTION
function getCircumference( r ){  //Function to get the circumference of a circle. The parameter will be defined as the radius of the circle when this function gets invoked.

    var circle = 2 * Math.PI * r;  //The calculation for the circumference of a circle.

    return Math.round ( circle * 100 ) / 100;  //Return the variable that holds the result of the circumference. This value will also get rounded to two decimal places.

}



//INVOKE THE FUNCTION
var circumference = getCircumference(radius);  //The variable circumference calls the getCircumference function and passes the radius variable to then get defined as the returning result of the function.



//RESULT TO PRINT
var message = "CIRCUMFERENCE CALCULATOR\n\nA circle with the radius of " + radius + " has a circumference of " + circumference;  //Concatenating the resulting message to a string.

console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.