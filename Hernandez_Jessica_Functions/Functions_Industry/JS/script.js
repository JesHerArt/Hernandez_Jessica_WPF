/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 25, 2014
 Week 4
 Functions Assignment: Industry-specific
 */


//OVERVIEW:
var overview = "AVERAGE WAGE CALCULATOR\n\nBeing that your are a fairly new freelance Web Developer, after 3 months of freelancing you want to see if you are at least on the right track to making the estimated $67,540.00/year average as listed on the Bureau of Labor & Statistics government website.\n\nThis program will calculate you average monthly income and compare to the estimated average to see if you're on the right track.";  //Message to display to user about the overview of this calculation.

//The yearly average estimate is from: http://www.bls.gov/oes/current/oes151134.htm

alert(overview);  // Display the overview message as an alert to the user.



//CONSTANTS:
var estWage = 67540.00;  //Constant for the estimated yearly wage for a web developer as labeled by the Bureau of Labor & Statistics.



//GIVENS:
var monthlyEarnings = new Array(3);  //Declaring the variable as an array of length 3.

var monthCount = 1;  //Counter to label the month count in the prompts.

for ( i = 0; i < monthlyEarnings.length; i++ ){  //For the length of the array this will loop to define the indexes of the array with the users input.

    monthlyEarnings[i] = prompt( "How much did you make in month " + monthCount + " of your time freelancing?" );  //Prompts the user to enter the monthly earnings for specified month by the month counter.  The variable gets declared and defined as the users input.

    while ( monthlyEarnings[i] === "" || monthlyEarnings[i] < 0 || isNaN( monthlyEarnings[i] ) ){  //While-loop is used for validation if the input is an empty string or less than zero.

        monthlyEarnings[i] = prompt( "An invalid amount has been entered for month " + monthCount + ", please try again.\n\n\nHow much did you make in month " + monthCount + " of your time freelancing?" );  //If the the input is invalid, the user gets prompted again to enter the monthly earnings for specified month by the month counter. The variable array index gets defined as the users input.

    }

    monthlyEarnings[i] = Number(monthlyEarnings[i]);  //Parsing the input as a number.

    monthCount++;  //Adding the counter up by 1.

}



//ANONYMOUS FUNCTION:
var getAverage = function (array){  //Anonymous function gets declared to a variable. Has 1 parameters: array to get passed the monthlyEarnings array.

    var total = 0;  //Declare the total variable as zero in the meantime.

    for ( i = 0; i < array.length; i++ ){  //For the length of the array this will loop to add the total of the last 3 months from the data stored in the array.

        total += array[i];  //Total variable gets updated to add the monthly earning for said index.

    }

    var average = Math.round( (total / array.length) * 100 ) / 100;  //Declare and define the average variable to calculate the average earnings for those 3 months. The result gets rounded to two decimal places.

    return average;  //Return the average result.

}



//INVOKING THE FUNCTION:
var monthlyAvg = getAverage(monthlyEarnings);  //Calling the function to get the monthly average earnings based on the 3 month earnings the user input.



//RESULTS TO PRINT:
var estWageMonthlyAvg = Math.round( (estWage / 12) * 100 ) / 100;  //Declaring and defining the estimated wage monthly average earnings by diving the estWage by 12 months in a year. This result is then round to two decimal places.

var compare = ( monthlyAvg >= estWageMonthlyAvg ) ? "CONGRATULATIONS! You are on the right track to make the estimated $" + estWage.toFixed(2) + " a year as a Web Developer even while being a freelancer.\n\nThe estimated monthly average is $" + estWageMonthlyAvg + " and you are averaging $" + monthlyAvg + " per month. Keep up the great work!" : "Unfortunately your monthly average earnings ($" + monthlyAvg + ") are lower than the estimated monthly average earnings ($" + estWageMonthlyAvg + ") to be able to make the estimated yearly wage of $" + estWage.toFixed(2) + " as a Web Developer. Keep up the effort!";  //Ternary conditional statement that determines if you meet the monthly average earnings. A message is concatenated to a string depending on if this is true or false.

var message = "AVERAGE WAGE CALCULATOR\n\n" + compare;  //Concatenating the resulting message with a header to a string.

console.log(message);   // Display the final message in the console.

alert(message);         // Display the final message as an alert to the user.