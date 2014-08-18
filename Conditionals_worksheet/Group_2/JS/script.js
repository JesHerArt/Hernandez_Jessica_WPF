/* Jessica J. Hernandez
 ID: 0004631401
 August 18, 2014
 Conditionals Worksheet Assignment
 Group 2: Grade Letter
 */

//OVERVIEW:



//GIVENS
var gradePercent = parseInt( prompt( "What was the final grade percentage you received in your course?" ) );


//RESULT VARIABLES
var grade;
var message;

if ( gradePercent >= 95 && gradePercent <= 100 ){
    grade = "A+";

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class!";  //Concatenating the resulting message to a string.

}else if ( gradePercent >= 90 && gradePercent <= 94 ){
    grade = "A";

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class!";  //Concatenating the resulting message to a string.

}else if ( gradePercent >= 85 && gradePercent <= 89 ){
    grade = "B+";

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class!";  //Concatenating the resulting message to a string.

}else if ( gradePercent >= 80 && gradePercent <= 84 ) {
    grade = "B";

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class!";  //Concatenating the resulting message to a string.

}else if ( gradePercent >= 76 && gradePercent <= 79 ) {
    grade = "C+";

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class.";  //Concatenating the resulting message to a string.

}else if ( gradePercent >= 73 && gradePercent <= 75 ) {
    grade = "C";

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class.";  //Concatenating the resulting message to a string.

}else if ( gradePercent >= 70 && gradePercent <= 72 ) {
    grade = "D";

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class.";  //Concatenating the resulting message to a string.

}else if ( gradePercent >= 0 && gradePercent <= 69 ) {
    grade = "F";

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class.";  //Concatenating the resulting message to a string.

}else ( gradePercent <= -1 || gradePercent >= 101 ) {
    message = "You have entered an invalid grade percentage. Please try again.";  //Concatenating the resulting message to a string.
}



//RESULT TO PRINT
console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.