/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 25, 2014
 Week 4
 Functions Assignment: Wacky
 */


//OVERVIEW:
var overview = "MEAN, MEDIAN & STANDARD DEVIATION CALCULATOR\n\nThis program will calculate the mean, median and standard deviation of five numbers you input.";  //Message to display to user about the overview of this calculation.

alert(overview);  // Display the overview message as an alert to the user.



//GIVENS:
var numbers = new Array(5);  //Declaring the variable as an array of length 5.

var numCount = 1;  //Count declared to use within the loop.

for ( i = 0; i < numbers.length; i++ ){  //For loop will iterate through the numbers array to store the input of the user.

    numbers[i] = prompt("Number " + numCount + " out of 5\n\nEnter a number from 1 through 100.");  //Prompts the user to enter a number between 1 and 100. The variable gets declared and defined as the users input.

    while ( numbers[i] === "" || numbers[i] < 1 || numbers[i] > 100 || isNaN( numbers[i] ) ){  //While-loop is used for validation if the input is an empty string or less than zero.

        numbers[i] = prompt( "An invalid number has been input, please try again.\n\n\nNumber " + numCount + " out of 5\n\nEnter a number from 1 through 100." );  //If the the input is invalid, the user gets prompted again to enter the a number between 1 and 100. The variable array index gets defined as the users input.

    }

    numbers[i] = Number(numbers[i]);  //Parsing the input as a number.

    numCount++;  //Adding the counter up by 1.

}



//FUNCTIONS:
function getMean(array){  //Function gets declared to find the mean of the five numbers; has one parameter for the array that will get passed.

    var total = 0;  //Declare the total variable as zero in the meantime.

    for ( i = 0; i < array.length; i++ ){  //For loop will iterate through the array for the length of the array to get each number stored in the array.

        total += array[i];  //Total variable gets updated to add the number stored for said index.

    }

    var average = Math.round ( (total / array.length) * 100 ) / 100;  //The average is calculated by dividing the total by the array length of five.  Result gets rounded to two decimal places.

    return average;  //Return the average result.

}

function getMedian(array){  //Function gets declared to find the median of the five numbers; has one parameter for the array that will get passed.

    array.sort(function(a, b){return a-b});  //Sort the array in numerical order.

    var middle = array[2];  //The middle variable gets defined as the middle number of the array after it has been sorted.

    return middle;  //Return the middle/median result.

}

function getStandardDeviation(array){  //Function gets declared to find the standard deviation of the five numbers; has one parameter for the array that will get passed.

    var average = getMean(array);  //Get the average of the five number by calling the getMean() function which will be used in the standard deviation calculation.

    var total = 0;  //Declare the total variable as zero in the meantime.

    for ( i = 0; i < array.length; i++ ){  //For loop will iterate through the array to use each number in the process of getting the standard deviation.

        total += Math.pow( array[i] - average, 2 );  //Total gets updated through each iteration and the number stored in the index of the array subtracts the average and then gets squared.

    }

    var stanDev = Math.round ( ( Math.sqrt( total / array.length )) * 100 ) / 100;  //Standard deviation gets calculated by getting the square root of the total divided by the array length. The result gets rounded to two decimal places.

    return stanDev;  //Return the standard deviation result.

}



//INVOKING THE FUNCTIONS:
var mean = getMean(numbers);  //Calling the function to get the mean of all five numbers.

var median = getMedian(numbers);  //Calling the function to get the median of all five numbers.

var standardDeviation = getStandardDeviation(numbers);  //Calling the function to get the standard deviation of all five numbers.



//RESULT TO PRINT:
var message = "MEAN, MEDIAN & STANDARD DEVIATION CALCULATOR\n\nYour Numbers: ";  //Declare the message variable with the header and leave it ready to concatenate with more details.

for ( i = 0; i <numbers.length; i++ ){  //Iterate through the loop to get the number that's held in each index of the array.

    message += numbers[i] + ", ";  //Concatenate each number from the array to update the already defined message.

}

message += "\n\nMean: " + mean + "\nMedian: " + median + "\nStandard Deviation: " + standardDeviation;  //Finish concatenating the message variable with the rest of the details to display to the user.

console.log(message);   // Display the final message in the console.

alert(message);         // Display the final message as an alert to the user.