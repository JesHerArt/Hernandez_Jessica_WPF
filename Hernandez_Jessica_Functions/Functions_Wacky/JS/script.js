/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 25, 2014
 Week 4
 Functions Assignment: Wacky
 */


//OVERVIEW:
var overview = "MEAN, MEDIAN & STANDARD DEVIATION CALCULATOR\n\nThis program will calculate the mean, median and standard deviation of five numbers you input.";

alert(overview);



//GIVENS:
var numbers = new Array(5);

var numCount = 1;

for ( i = 0; i < numbers.length; i++ ){

    numbers[i] = prompt("Number " + numCount + " out of 5\n\nEnter a number from 1 through 100.");

    while ( numbers[i] == "" || numbers[i] < 1 || numbers[i] > 100 ){

        numbers[i] = prompt( "An invalid number has been input, please try again.\n\n\nNumber " + numCount + " out of 5\n\nEnter a number from 1 through 100." );

    }

    numbers[i] = Number(numbers[i]);

    numCount++;

}



//FUNCTIONS:
function getMean(array){

    var total = 0;

    for ( i = 0; i < array.length; i++ ){

        total += array[i];

    }

    var average = total / array.length;

    return total;

}

function getMedian(array){

    array.sort(function(a, b){return a-b});

    var middle = array[2];

    return middle;

}

function getStandardDeviation(array){

    var average = getMean(array);

    var total = 0;

    for ( i = 0; i < array.length; i++ ){

        total += Math.pow( array[i] - average, 2 );

    }

    var stanDev = Math.sqrt( total / array.length );

    return stanDev;

}



//INVOKING THE FUNCTIONS:
var mean = getMean(numbers);

var median = getMedian(numbers);

var standardDeviation = getStandardDeviation(numbers);