/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 25, 2014
 Week 4
 Functions Assignment: Industry-specific
 */


//OVERVIEW:
var overview = "AVERAGE WAGE CALCULATOR\n\nBeing that your are a fairly new freelance Web Developer, after 3 months of freelancing you want to see if you are at least on the right track to making the estimated $67,540.00/year average as listed on the Bureau of Labor & Statistics government website. This program will calculate you average monthly income and compare to the estimated average to see if you're on the right track.";

//The yearly average estimate is from: http://www.bls.gov/oes/current/oes151134.htm

alert(overview);



//CONSTANTS:
var estWage = 67540.00;



//GIVENS:
var monthlyEarnings = new Array(3);

for ( i = 0; i < monthlyEarnings.length; i++ ){

    var monthCount = 1;

    monthlyEarnings[i] = prompt( "How much did you make in month " + monthCount + " of your time freelancing?" );

    while ( monthlyEarnings[i] == "" || monthlyEarnings[i] < 0 ){

        monthlyEarnings[i] = prompt( "An invalid amount has been entered for month " + monthCount + ", please try again.\n\n\nHow much did you make in month " + monthCount + " of your time freelancing?" );

    }

    monthlyEarnings[i] = Number(monthlyEarnings[i]);

}



//ANONYMOUS FUNCTION:
var getAverage = function (array){

    var total = 0;

    for ( i = 0; i < array.length; i++ ){

        total += array[i];

    }

    var average = Math.round( (total / array.length) * 100 ) / 100;

    return average;

}



//INVOKING THE FUNCTION:
var monthlyAvg = getAverage(monthlyEarnings);



//RESULTS TO PRINT:
var estWageMonthlyAvg = Math.round( (estWage / 12) * 100 ) / 100;

var compare = ( monthlyAvg >= estWageMonthlyAvg ) ? "CONGRATULATIONS! You are on the right track to make the estimated $" + estWage + " a year as a Web Developer even while being a freelancer.\n\nThe estimated monthly average is $" + estWageMonthlyAvg + " and you are averaging $" + monthlyAvg + " per month. Keep up the great work!" : "Unfortunately your monthly average earnings ($" + monthlyAvg + ") are lower than the estimated monthly average earnings ($" + estWageMonthlyAvg + ") to be able to make the estimated yearly wage of $" + estWage + " as a Web Developer. Keep up the effort!";

var message = "AVERAGE WAGE CALCULATOR\n\n" + compare;

console.log(message);

alert(message);