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

for ( k = 0; k < pages; k++ )
    {
        var pageNum = 0;
        pagesData[k] = parseInt( prompt("How many kb is page #" + pageNum++ ) );
    }

var DSL_STANDARD_KBPS = 3000;  //Constant variable for the standard DSL download speed in kb per second.

var DIAL_UP_STANDARD_KBPS = 56;  //Constant variable for the standard Dial-up download speed in kb per second.



//RESULT VARIABLES
var pricePerPage = Math.round( (price/pages) * 100 ) / 100;

var totalKb = 0;

for ( k = 0; k < pages; k++ )
    {
        totalKb += pagesData[k];
    }

var avgKbPerPage = totalKb / pages;

var dslLoad = avgKbPerPage / DSL_STANDARD_KBPS;

var dialUpLoad = avgKbPerPage / DIAL_UP_STANDARD_KBPS;



//RESULT TO PRINT
var message = "";  //Concatenating the resulting message to a string.

console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.