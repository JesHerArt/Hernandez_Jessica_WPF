/* Jessica J. Hernandez
 ID: 0004631401
 August 11, 2014
 Week 2
 Expressions Assignment: Industry-specific
 */

//OVERVIEW:
alert( "OVERVIEW:\n\nFor each client you make a website for, you charge a fixed-price. You want to calculate how much your earning for each web page you designed/developed based on the fixed-price you charged the client. This will give you an estimate as to how much you're charging per page in your fixed-price amount.\n\nBefore you turn in the finalized project files to the client and upload them to the server hosting their website, you also want to make sure your average download speeds for the websites' pages are decent for both DSL and Dial-up broadband visitors on the site." );  //Alert that prompts the user with an overview of what this program will do and what it will help calculate.


//GIVENS
var price = parseFloat( prompt("How much did you charge your client?\n** Do not enter the '$' sign, just the price. **") );  //Prompts the user to enter the price they charged the client to do their website.

var pages = parseInt( prompt("How many pages does the website you created for your client have?") );  //Prompts the user to input how many pages they created for the clients website.

var pagesData = new Array();  //Declare the array needed to store the information for the givens the user will be prompted to input.

for ( k = 0; k < pages; k++ )  //This for-loop will define the the pagesData array by prompting the user to enter how much kb is each page of the website depending on how many web pages the user previously said they had created.
    {
        var pageNum = 0;  //Variable created in the for-loop for the sake of displaying page #'s in the prompt.
        pagesData[k] = parseInt( prompt("How many kb is page #" + pageNum++ ) );
    }



//CONSTANTS
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