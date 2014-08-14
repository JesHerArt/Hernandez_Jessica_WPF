/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 11, 2014
 Week 2
 Expressions Assignment: Industry-specific
 */

//OVERVIEW:
alert( "OVERVIEW:\n\nFor each client you make a website for, you charge a fixed-price. You want to calculate how much your earning for each web page you designed/developed based on the fixed-price you charged the client. This will give you an estimate as to how much you're charging per page in your fixed-price amount.\n\nBefore you turn in the finalized project files to the client and upload them to the server hosting their website, you also want to make sure your average download speeds for the websites' pages are decent for both DSL and Dial-up broadband visitors on the site." );  //Alert that prompts the user with an overview of what this program will do and what it will help calculate.

/*
    Note to professor:
    Here is some of the data I used so you can test out the calculations
    of this JS code. So aside from any numbers you input to test out you
    can also have another example to try really quick, since I know it's
    a lot of things to input into the prompts and check calculations for.
    The for-loop will give you a prompt for every amount of pages you input.

    Price: $452.73
    Pages: 5
    kb page 1: 900
    kb page 2: 375
    kb page 3: 1024
    kb page 4: 2041
    kb page 5: 725
 */



//GIVENS
var price = parseFloat( prompt("How much did you charge your client?\n** Do not enter the '$' sign, just the price. **") );  //Prompts the user to enter the price they charged the client to do their website.

var pages = parseInt( prompt("How many pages does the website you created for your client have?") );  //Prompts the user to input how many pages they created for the clients website.

var pagesData = new Array();  //Declare the array needed to store the information for the givens the user will be prompted to input.

var pageNumCount = 1;  //Variable created for the sake of displaying page #'s in the prompt of the for-loop.

for ( k = 0; k < pages; k++ )  //This for-loop will define the the pagesData array by prompting the user to enter how much kb is each page of the website depending on how many web pages the user previously said they had created.
    {
        pagesData[k] = parseInt( prompt("How many kb is page #" + (pageNumCount++) ) );
    }



//CONSTANTS
var DSL_STANDARD_KBPS = 3000;  //Constant variable for the standard DSL download speed in kb per second.

var DIAL_UP_STANDARD_KBPS = 56;  //Constant variable for the standard Dial-up download speed in kb per second.



//RESULT VARIABLES
var pricePerPage = Math.round( (price/pages) * 100 ) / 100;  //Calculates the average price per page based on the fixed-price that was charged to the client.

var totalKb = 0;  //Declare and subtly define the variable to then use in the for-loop to define the total kb all together for the entire website.

for ( k = 0; k < pages; k++ )  //This for-loop will fully define the totalKb variable by adding the kb of all the pages of the website that was added in the array by the user when they were prompted to enter the information before.
    {
        totalKb += pagesData[k];  //The totalKb variable uses the += operator to continue adding the next kb amount to the previous sum.
    }

var avgKbPerPage = totalKb / pages;  //Calculates the average kb per page by dividing the total kb amount for the entire website by the total number of web pages the site has.

var dslLoad = Math.round( (avgKbPerPage / DSL_STANDARD_KBPS) * 100 ) / 100;  //Calculates the average DSL download time by diving the average kb per page by the standard average of kbps download speed DSL is known to have.

var dialUpLoad = Math.round ( (avgKbPerPage / DIAL_UP_STANDARD_KBPS) * 100 ) / 100;  //Calculates the average Dial-up download time by diving the average kb per page by the standard average of kbps download speed Dial-up is known to have.



//RESULT TO PRINT
var kbPerPageOutput = "Kilobytes Per Page Data:\n";  //Declaring and defining a variable for continuous string concatenation to be used in the final message that will be displayed in the console and alert box.

var pagesNumCount2 = 1;  //Variable created for the sake of displaying page #'s in the kbPerPageOutput message of the for-loop.

for ( k = 0; k < pages; k++ )  //This for-loop will go through the data in the array to be used in the concatenation of the string variable kbPerPageOutput.
{
    kbPerPageOutput += "Page #" + (pagesNumCount2++) + ": " + pagesData[k] + "kb\n";  //This will continue concatenating strings together to display in the kbPerPageOutput variable being used in the final message that will be displayed in the console and alert box.
}


var message = "PRICE DETAILS:\n\nYou charged your client a $" + price + " fixed-price cost.\nYou earned an average of $" + pricePerPage + " per webpage you designed and developed for your clients' " + pages + " page website.\n\n---------------------------------------------------\n\nWEBSITE DATA DETAILS:\n\n" + kbPerPageOutput + "\nAverage kb per page: " + avgKbPerPage + "kb\n\n\nThe average time to load a page on your clients' website on a DSL broadband connection is " + dslLoad + " seconds.\n\nThe average time to load a page on your clients' website on a Dial-up broadband connection is " + dialUpLoad + " seconds.\n\n\nNote:\nThe standard average download speed for DSL is " + DSL_STANDARD_KBPS + "kbps.\nThe standard average download speed for Dial-up is " + DIAL_UP_STANDARD_KBPS + "kpbs.";  //Concatenating the resulting message to a string.


console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.