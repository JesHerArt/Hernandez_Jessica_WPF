/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 20, 2014
 Week 3
 Conditionals Assignment: Industry-specific
 */

//OVERVIEW:
var overview = "CALCULATING POSTER COSTS\n\nAside from Graphic Design services you provide to clients, you also offer them poster printing services to be able to provide them with their final product for any poster you design for them. A couple of your local print shops have different deals every week so you always try to use the print shop that offers the lowest price which would be benefit yourself and your client.\n\nPrint Shop #1 (\"PrintingPlus\") usually charges a range between $1.50 and $2.75 per square foot. It depends which deal they have that week.\n\nPrint Shop #2 (\"Quick Print\") usually charges a flat rate of $5.00 plus an additional $1.25 per square foot.\n\nTherefore, depending what pricing deal PrintingPlus is having, will determine which print shop has the best deal for the week.";  //Message to display to user about the overview of this calculation.

alert(overview);  // Display the overview message as an alert to the user.



//CONSTANTS:
var oneFoot = 12;  //12 inches are in 1 foot.

var shop2FlatRate = 5.00;  //Flat rate fee for Quick Print

var shop2SqFtRate = 1.25;  //Per square foot rate in addition to the flat rate fee at Quick Print.



//GIVENS:
var posterWidth = prompt( "Enter the poster's width (in inches)." );  //Prompting the user to enter the poster width in inches.

if ( posterWidth === "" || posterWidth < 0){  //Poster width input validation.

    posterWidth = prompt( "You've input an invalid Poster Width size, please try again.\n\n\nEnter the poster's width (in inches)." );  //Prompting the user an invalid input for the poster width was made. And prompting the user again to enter the poster width in inches.

}

posterWidth = Number(posterWidth);  //Parsing the poster width input as a number variable.


var posterLength = prompt( "Enter the poster's length (in inches)." );  //Prompting the user to enter the poster length in inches.

if ( posterLength === "" || posterLength < 0){  //Poster length input validation.

    posterLength = prompt( "You've input an invalid Poster Length size, please try again.\n\n\nEnter the poster's length (in inches)." );  //Prompting the user an invalid input for the poster length was made. And prompting the user again to enter the poster length in inches.

}

posterLength = Number(posterLength);  //Parsing the poster length input as a number variable.


var shop1SqFtRate = prompt( "What is the current deal for poster print jobs at PrintingPlus (print shop #1) this week?\nWeekly deals range between $1.50 - $2.75 per square foot.\n\n** Do not input the '$' symbol, just the amount. **" );  //Prompting the sure to enter the weekly deal price at PrintingPlus.

if ( shop1SqFtRate === "" || shop1SqFtRate < 0){  //Poster rate input validation.

    shop1SqFtRate = prompt( "You've input an invalid Rate for the poster printing deal pricing, please try again.\n\n\nWhat is the current deal for poster print jobs at PrintingPlus (print shop #1) this week?\nWeekly deals range between $1.50 - $2.75 per square foot.\n\n** Do not input the '$' symbol, just the amount. **" );  //Prompting the user an invalid input for the poster rate at PrintingPlus was made. And prompting the user again to enter the weekly deal price at PrintingPlus.

}

shop1SqFtRate = parseFloat( shop1SqFtRate );  //Parsing the shop1SqFtRate input as a double variable.



//RESULT VARIABLES:
var posterSqFt = (posterLength + posterWidth) / oneFoot;  //Declaring and defining the variable to store the total poster square footage.

var shop1Cost = posterSqFt * shop1SqFtRate;  //Declaring and defining the variable to store the total printing cost at PrintingPlus.

var shop2Cost = posterSqFt * shop2SqFtRate + shop2FlatRate;  //Declaring and defining the variable to store the total printing cost at Quick Print.

var costDifference;  //Declaring the variable. This will hold a concatenated message.

costDifference = ( shop1Cost < shop2Cost ) ? "PrintingPlus (Print Shop #1) would cost you less to print a " + posterWidth + "in. x " + posterLength + "in. color poster.\n\nWith rate of $" + shop1SqFtRate.toFixed(2) + " per Sq. Ft., your total spending cost is $" + shop1Cost.toFixed(2) + ".\n\nYou will save $" + (shop2Cost - shop1Cost).toFixed(2) + " by printing the poster at PrintingPlus." : "Quick Print (Print Shop #2) would cost you less to print a " + posterWidth + "in. x " + posterLength + "in. color poster.\n\nWith rate of $" + shop2SqFtRate.toFixed(2) + " per Sq. Ft. plus the flat rate fee of $" + shop2FlatRate.toFixed(2) + ", your total spending cost is $" + shop2Cost.toFixed(2) + ".\n\nYou will save $" + (shop1Cost - shop2Cost).toFixed(2) + " by printing the poster at Quick Print.";  //Concatenating the resulting message to a string.

if ( shop1Cost === shop2Cost ){  //Although the ternary statement checks to see which cost is less, this if statement checks to see if both costs equal the same amount.

    costDifference = "Both PrintingPlus (Print Shop #1) and Quick Print (Print Shop #2) have the same printing cost to print a " + posterWidth + "in. x " + posterLength + "in. color poster this week. Visit which ever print shop is closest to you at the moment.\n\nYour total spending cost is $" + shop1Cost.toFixed(2) + ".";  //Therefore, if both cost are the same amount, the costDifference variable gets replaced with this concatenated message string instead.

}



//RESULT TO PRINT:
var message = "CALCULATING POSTER COSTS: RESULTS\n\n" + costDifference;  //Concatenating the resulting concatenated message with the message header.

console.log(message);   // Display the final message in the console.

alert(message);         // Display the final message as an alert to the user.