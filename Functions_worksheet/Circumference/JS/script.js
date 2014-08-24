/* Jessica J. Hernandez
 ID: 0004631401
 August 23, 2014
 Functions Worksheet Assignment
 Problem 1: Circumference
 */

//OVERVIEW:
var overview = "CIRCUMFERENCE CALCULATOR\n\nThis program will calculate the circumference of a circle for you when you provide the radius of the circle.";

console.log(overview);

alert(overview);



//GIVENS:
var radius = prompt( "What is the radius of the circle?" );

if ( radius == "" || radius < 0 ){
    radius = prompt( "You've input an invalid length for the radius, please try again.\n\nWhat is the radius of the circle?" );
}

radius = Number(radius);



//FUNCTION
function getCircumference( r ){
    var circle = 2 * Math.PI * r;
    return circle;
}



//INVOKE THE FUNCTION
var circumference = getCircumference(radius);