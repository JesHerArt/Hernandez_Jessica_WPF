/* Jessica J. Hernandez
 ID: 0004631401
 August 11, 2014
 Week 2
 Expressions Assignment: Industry-specific
 */

//OVERVIEW:



//GIVENS
var price = parseFloat( prompt("How much did you charge your client?") );

var pages = parseInt( prompt("How many pages does the website you created for your client have?") );

var pagesData = new Array();

var pageNum = 0;

for ( k = 0; k < pages; k++ )
    {
        pagesData = parseInt( prompt("How many kb is page #" + pageNum++ ) );
    }



//RESULT VARIABLES



//RESULT TO PRINT
var message = "";  //Concatenating the resulting message to a string.

console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.