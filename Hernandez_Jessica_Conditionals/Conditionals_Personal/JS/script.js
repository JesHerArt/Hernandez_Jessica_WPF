/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 20, 2014
 Week 3
 Conditionals Assignment: Personal
 */

//OVERVIEW:
var overview = "OIL CHANGE & MAINTENANCE CHECK\n\nYou have received a recall notice in the mail for your car and need to take it in to service at the dealer. Anything having to be done to the car for the recall will be covered by the dealer.\n\nWhile you're there you ask to get a multi-point inspection regardless, to see what additional maintenance requirements need to be done since the last time you had your vehicle serviced. You will then be provided with an estimate as to what maintenance is required for your vehicle at the moment.";  //Message to display to user about the overview of this calculation.

alert(overview);  // Display the overview message as an alert to the user.



//CONSTANTS:
var oilChangeMileage = 3000;  //Constant for: Oil change to be done every 3,000 miles.

var rotateTiresMileage = 5000;  //Constant for: Tires to rotate every 5,000 miles.

var brakesMileage = 10000;  //Constant for: Brakes to be replaced every 10,000 miles.

var sparkPlugMileage = 20000;  //Constant for: Spark Plugs to be replaced every 20,000 miles.

var motorMountsMileage = 100000;  //Constant for: Motor Mounts to be replaced at 100,000 miles.

var oilChangeCost = 40.00;  //Constant for: Oil change cost.

var rotateTiresCost = 10.00;  //Constant for: Rotate tires cost.

var replaceBrakesCost = 50.00;    //Constant for: Brakes parts cost.

var replaceSparkPlugsCost = 45.00;  //Constant for: Spark plugs parts cost.

var replaceMotorMountsCost = 130.00;  //Constant for: Motor mounts parts cost.

var serviceCost = 50.00;  //Service charge of $50.00 as part of the maintenance service quote to give the customer.



//GIVENS:
var prevOilChangeMileage = prompt( "What mileage did the vehicle have when the last oil change was done?" );  //Prompting the user to enter the amount of miles the car had when the last oil change was done.

if ( prevOilChangeMileage === "" || prevOilChangeMileage < 0 ){  //The if statement determines if the previous oil change mileage is an empty string or less than zero.

    prevOilChangeMileage = prompt( "You've input an invalid Previous Oil Change Mileage amount, please try again.\n\n\nWhat mileage did the vehicle have when the last oil change was done?" );  //Prompting the user an invalid input for the previous oil change car mileage was made. And prompting the user again to enter the previous oil change car mileage.

}

prevOilChangeMileage = parseInt(prevOilChangeMileage);  //Parsing the variable to an int.


var prevMaintenanceMileage = prompt( "What mileage did the vehicle have when the last tune-up was done?" );  //Prompting the user to enter the amount of miles the car had when the last tune-up was done.

if ( prevMaintenanceMileage === "" || prevMaintenanceMileage < 0 ){  //The if statement determines if the previous maintenance/tune-up mileage is an empty string or less than zero.

    prevMaintenanceMileage = prompt( "You've input an invalid Previous Maintenance/Tune-up Mileage amount, please try again.\n\n\nWhat mileage did the vehicle have when the last tune-up was done?" );  //Prompting the user an invalid input for the previous maintenance/tune-up car mileage was made. And prompting the user again to enter the previous maintenance/tune-up car mileage.

}

prevMaintenanceMileage = parseInt(prevMaintenanceMileage);  //Parsing the variable to an int.


var currentMileage = prompt( "What mileage does the vehicle currently have at the moment?" );  //Prompting the user to enter the amount of miles the car has at the moment.

if ( currentMileage === "" || currentMileage < 0 ){  //The if statement determines if the current mileage is any empty string or less than zero.

    currentMileage = prompt( "You've input an invalid Current Vehicle Mileage amount, please try again.\n\n\nWhat mileage does the vehicle currently have at the moment?" );  //Prompting the user an invalid input for the current car mileage was made. And prompting the user again to enter the current car mileage.

}

currentMileage = parseInt(currentMileage);  //Parsing the variable to an int.



//RESULT VARIABLES:
var maintenanceCostQuote = 0.00; //Declaring the total cost for maintenance/tune-up expenses as zero to later update it with the actual costs.

var oilMileageDifference = currentMileage - prevOilChangeMileage;  //Declare and define the variable to the difference in miles from the previous oil change car mileage to the current car mileage.

var maintenanceMileageDifference = currentMileage - prevMaintenanceMileage;  //Declare and define the variable to the difference in miles from the previous maintenance/tune-up car mileage to the current car mileage.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var oilChange;  //Declared the variable to store the result if an oil change is needed or not.

if ( oilMileageDifference >= oilChangeMileage ){  //Determines if the oil change mileage difference is greater than or equal to the oil change mileage constant (3,000).

    oilChange = "OIL CHANGE ................................ REQUIRED ($" + oilChangeCost.toFixed(2) + ")\nA required maintenance oil change is required. It has been " + oilChangeMileage + "(+) miles since the last oil change.";  //If the statement is true, the oil change variable will be defined to this concatenated message.

    maintenanceCostQuote += oilChangeCost;  //Variable gets updated to include the cost of an oil change.

}else{

    parts = "OIL CHANGE ................................ NOT REQUIRED ($0.00)";  //Otherwise, an oil change is not required at the moment and the corresponding concatenated message will be used instead.

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var rotateTires;  //Declared the variable to store the result if tire rotation is needed or not.

if ( oilMileageDifference >= rotateTiresMileage ){  //Determines if the oil change mileage difference is greater than or equal to the tire rotation  mileage constant (5,000).

    rotateTires = "\n\nROTATE TIRES ............................. REQUIRED ($" + rotateTiresCost.toFixed(2) + ")\nTire rotation is required for every " + rotateTiresMileage + "(+) miles since the last oil change.";  //If the statement is true, the rotating tires variable will be defined to this concatenated message.

    maintenanceCostQuote += rotateTiresCost;  //Variable gets updated to include the cost of rotating tires.

}else{

    rotateTires = "\n\nROTATE TIRES .............................. NOT REQUIRED ($0.00)";  //Otherwise, tire rotation is not required at the moment and the corresponding concatenated message will be used instead.

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var parts;  //Declared the variable to store the result if certain parts are needed or not.

if ( maintenanceMileageDifference >= brakesMileage ){  //Determines if the maintenance/tune-up mileage difference is greater than or equal to the replacing brakes constant (10,000).

    parts = "\n\nREPLACE BRAKES ......................... REQUIRED ($" + replaceBrakesCost.toFixed(2) + ")\nBrakes are required to be replaced every " + brakesMileage + " miles.";  //If the statement is true, the parts variable will be defined to this concatenated message.

    maintenanceCostQuote += replaceBrakesCost;  //Variable gets updated to include the cost of replacing the brakes.

}else{

    parts = "\n\nREPLACE BRAKES ......................... NOT REQUIRED ($0.00)";  //Otherwise, brakes are not required at the moment and the corresponding concatenated message will be used instead.

}


if ( maintenanceMileageDifference >= sparkPlugMileage ){  //Determines if the maintenance/tune-up mileage difference is greater than or equal to the replacing spark plugs constant (10,000).

    parts += "\n\nREPLACE SPARK PLUGS ................ REQUIRED ($" + replaceSparkPlugsCost.toFixed(2) + ")\nSpark Plugs are required to be replaced every " + sparkPlugMileage + " miles.";  //If the statement is true, the parts variable will be updated to include this other concatenated message.

    maintenanceCostQuote += replaceSparkPlugsCost;  //Variable gets updated to include the cost of replacing the spark plugs.

}else{

    parts += "\n\nREPLACE SPARK PLUGS ................ NOT REQUIRED ($0.00)";  //Otherwise, spark plugs are not required at the moment and the corresponding concatenated message will be used instead.

}


if ( currentMileage >= motorMountsMileage ){  //Determines if the maintenance/tune-up mileage difference is greater than or equal to the replacing brakes constant (10,000).

    parts += "\n\nREPLACE MOTOR MOUNTS ........... REQUIRED ($" + replaceMotorMountsCost.toFixed(2) + ")\nMotor Mounts need to be replaced every " + motorMountsMileage + " miles.";  //If the statement is true, the parts variable will be updated to include this other concatenated message.

    maintenanceCostQuote += replaceMotorMountsCost;  //Variable gets updated to include the cost of replacing the motor mounts.

}else{

    parts += "\n\nREPLACE MOTOR MOUNTS ........... NOT REQUIRED ($0.00)";  //Otherwise, motor mounts are not required at the moment and the corresponding concatenated message will be used instead.

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var serviceCharge;  //Declared the variable to store the result if a service charge is needed or not.

if ( maintenanceCostQuote > 0 ){  //Determines if the total cost estimate is greater than zero.

    serviceCharge = "\n\nSERVICE CHARGE ......................... REQUIRED ($" + serviceCost.toFixed(2) + ")\nA service fee charge will be added to the total cost whenever maintenance/tune-ups need to be made to a vehicle.";  //If the statement is true, the service charge variable will be defined to this concatenated message.

    maintenanceCostQuote += serviceCost;  //Variable gets updated to include the cost of the service fee.

}else{

    serviceCharge = "\n\nSERVICE CHARGE ......................... NOT REQUIRED ($0.00)\nNo service fee charge will be added since no required maintenance/tune-ups need to be made to the vehicle.";  //Otherwise, a service charge is not required at the moment and the corresponding concatenated message will be used instead.

}



//RESULT TO PRINT
var message = "OIL CHANGE & MAINTENANCE CHECK\n\nPrevious Oil Change Mileage ...................... " + prevOilChangeMileage + "\nPrevious Tune-up Mileage ......................... " + prevMaintenanceMileage + "\nCurrent Mileage ......................................... " + currentMileage + "\n\n" + oilChange + rotateTires + parts + serviceCharge + "\n\n\nTOTAL MAINTENANCE COST (QUOTE): $" + maintenanceCostQuote.toFixed(2);  //Concatenating the resulting message to a string.

console.log(message);   // Display the final message in the console.

alert(message);         // Display the final message as an alert to the user.