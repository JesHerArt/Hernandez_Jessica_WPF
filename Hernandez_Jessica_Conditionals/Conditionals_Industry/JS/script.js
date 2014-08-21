/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 20, 2014
 Week 3
 Conditionals Assignment: Industry-specific
 */

//OVERVIEW:
var overview = "CALCULATING POSTER COSTS\n\nAside from Graphic Design services you provide to clients, you also offer them poster printing services to be able to provide them with their final product for any poster you design for them. A couple of your local print shops have different deals every week so you always try to use the print shop that offers the lowest price which would be benefit yourself and your client.\n\nPrint Shop #1 (\"PrintingPlus\") usually charges a range between $1.50 and $2.75 per square foot. It depends which deal that have that week.\n\nPrint Shop #2 (\"Quick Print\") usually charges a flat rate of $5.00 plus an additional $1.25 per square foot.\n\nTherefore, depending what pricing deal PrintingPlus is having, will determine which print shop has the best deal for the week.";  //Message to display to user about the overview of this calculation.

alert(overview);  // Display the overview message as an alert to the user.



//CONSTANTS:
var oneFoot = 12;

var shop2FlatRate = 5.00;

var shop2SqFtRate = 1.25;



//GIVENS:
var posterWidth = prompt( "Enter the poster's width (in inches)." );

if ( posterWidth === "" || posterWidth < 0){  //Poster width input validation.

    posterWidth = prompt( "You've input an invalid Poster Width size, please try again.\n\n\nEnter the poster's width (in inches)." );

}

posterWidth = Number(posterWidth);


var posterLength = prompt( "Enter the poster's length (in inches)." );

if ( posterLength === "" || posterLength < 0){  //Poster length input validation.

    posterLength = prompt( "You've input an invalid Poster Length size, please try again.\n\n\nEnter the poster's length (in inches)." );

}

posterLength = Number(posterLength);


var shop1SqFtRate = prompt( "What is the current deal for poster print jobs at PrintingPlus (print shop #1) this week?\nWeekly deals range between $1.50 - $2.75 per square foot.\n\n** Do not input the '$' symbol, just the amount. **" );

if ( shop1SqFtRate === "" || shop1SqFtRate < 0){  //Poster length input validation.

    shop1SqFtRate = prompt( "You've input an invalid Rate for the poster printing deal pricing, please try again.\n\n\nWhat is the current deal for poster print jobs at PrintingPlus (print shop #1) this week?\nWeekly deals range between $1.50 - $2.75 per square foot.\n\n** Do not input the '$' symbol, just the amount. **" );

}



//RESULT VARIABLES:
var posterSqFt = (posterLength + posterWidth) / oneFoot;

var shop1Cost = posterSqFt * shop1SqFtRate;

var shop2Cost = posterSqFt * shop2SqFtRate + shop2FlatRate;

var costDifference;

costDifference = ( shop1Cost < shop2Cost ) ? "PrintingPlus (Print Shop #1) would cost you less to print a " + posterWidth + "in. x " + posterLength + "in. color poster.\n\nWith rate of $" + shop1SqFtRate.toFixed(2) + " per Sq. Ft., your total spending cost is $" + shop1Cost.toFixed(2) + ".\n\nYou are saving $" + (shop2Cost - shop1Cost).toFixed(2) + " by printing the poster at PrintingPlus." : "Quick Print (Print Shop #2) would cost you less to print a " + posterWidth + "in. x " + posterLength + "in. color poster.\n\nWith rate of $" + shop2SqFtRate.toFixed(2) + " per Sq. Ft. plus the flat rate fee of $" + shop2FlatRate.toFixed(2) + ", your total spending cost is $" + shop2Cost.toFixed(2) + ".\n\nYou are saving $" + (shop1Cost - shop2Cost).toFixed(2) + " by printing the poster at Quick Print.";



//RESULT TO PRINT:
