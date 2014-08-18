/* Jessica J. Hernandez
 ID: 0004631401
 August 18, 2014
 Conditionals Worksheet Assignment
 Group 2: Grade Letter Calculator
 */

//OVERVIEW:
alert( "GRADE LETTER CALCULATOR\nThe following prompt will ask you to input your final grade percentage to then determine what was your final grade in the class." );  //Prompts the user what the following program/script is running.


//GIVENS
var gradePercent = parseInt( prompt( "What was the final grade percentage you received in your course?" ) ); //Prompts the user to enter their grade percentage. The input gets parsed to an int.


//RESULT VARIABLES
var grade;  //The grade variable is declared to then be defined by a letter grade depending on the grade percentage the student received.
var message;  //Declare the message variable to use to store the concatenated resulting message.

if ( gradePercent >= 95 && gradePercent <= 100 ){  //This if determines if the grade percentage is between 95 and 100.
    grade = "A+";  //Grade gets defined as A+ since the if statement was true.

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class!";  //Concatenating the resulting message to a string.

}else if ( gradePercent >= 90 && gradePercent <= 94 ){  //This else-if determines if the grade percentage is between 90 and 94.
    grade = "A";  //Grade gets defined as A since the else-if statement was true.

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class!";  //Concatenating the resulting message to a string.

}else if ( gradePercent >= 85 && gradePercent <= 89 ){  //This else-if determines if the grade percentage is between 85 and 89.
    grade = "B+";  //Grade gets defined as B+ since the else-if statement was true.

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class!";  //Concatenating the resulting message to a string.

}else if ( gradePercent >= 80 && gradePercent <= 84 ) {  //This else-if determines if the grade percentage is between 80 and 84.
    grade = "B";  //Grade gets defined as B since the else-if statement was true.

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class!";  //Concatenating the resulting message to a string.

}else if ( gradePercent >= 76 && gradePercent <= 79 ) {  //This else-if determines if the grade percentage is between 76 and 79.
    grade = "C+";  //Grade gets defined as C+ since the else-if statement was true.

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class.";  //Concatenating the resulting message to a string.

}else if ( gradePercent >= 73 && gradePercent <= 75 ) {  //This else-if determines if the grade percentage is between 73 and 75.
    grade = "C";  //Grade gets defined as C since the else-if statement was true.

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class.";  //Concatenating the resulting message to a string.

}else if ( gradePercent >= 70 && gradePercent <= 72 ) {  //This else-if determines if the grade percentage is between 70 and 72.
    grade = "D";  //Grade gets defined as D since the else-if statement was true.

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class.";  //Concatenating the resulting message to a string.

}else if ( gradePercent >= 0 && gradePercent <= 69 ) {  //This else-if determines if the grade percentage is between 0 and 69.
    grade = "F";  //Grade gets defined as F since the else-if statement was true.

    message = "You have " + gradePercent + "%, which means you have earned a(n) " + grade + " in the class.";  //Concatenating the resulting message to a string.

}else {  //The default message to be displayed if an invalid grade percentage is input by the student.
    message = "You have entered an invalid grade percentage. Please try again.";  //Concatenating the resulting message to a string.
}



//RESULT TO PRINT
console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.