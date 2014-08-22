/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 20, 2014
 Week 3
 Conditionals Assignment: Personal
 */

//OVERVIEW:
var overview = "OIL CHANGE & MAINTENANCE CHECK\n\nYou have received a recall notice in the mail for your car. Anything having to be done to the car for the recall will be covered by the dealer. But while you're there you ask to get a multi-point inspection regardless, to see what additional maintenance requirements need to be done since the last time you had a previous tune-up. You will then be provided with an estimate as to what maintenance is required for your vehicle at the moment.";  //Message to display to user about the overview of this calculation.

alert(overview);  // Display the overview message as an alert to the user.



//CONSTANTS:
var oilChangeMileage = 3000;  //Constant for: Oil change to be done every 3,000 miles.

var rotateTiresMileage = 5000;  //Constant for: Tires to rotate every 5,000 miles.

var brakesMileage = 10000;  //Constant for: Brakes to be replaced every 10,000 miles.

var sparkPlugMileage = 20000;  //Constant for: Spark Plugs to be replaced every 20,000 miles.

var motorMountsMileage = 100000;  //Constant for: Motor Mounts to be replaced at 100,000 miles.

var oilChangeCost = 40.00;  //Constant for: Oil change cost.

var rotateTiresCost = 10.00;  //Constant for: Rotate tires cost.

var replaceBrakes = 50.00;    //Constant for: Brakes parts cost.

var replaceSparkPlugs = 45.00;  //Constant for: Spark plugs parts cost.

var replaceMotorMounts = 130.00;  //Constant for: Motor mounts parts cost.

var serviceCost = 50.00;  //Service charge of $50.00 as part of the maintenance service quote to give the customer.



//GIVENS:
var prevOilChangeMileage = prompt( "What mileage did the vehicle have when the last oil change was done?" );

if ( prevOilChangeMileage === "" || prevOilChangeMileage < 0 ){

    prevOilChangeMileage = prompt( "You've input an invalid Previous Oil Change Mileage amount, please try again.\n\n\nWhat mileage did the vehicle have when the last oil change was done?" );

}

prevOilChangeMileage = parseInt(prevOilChangeMileage);


var prevMaintenanceMileage = prompt( "What mileage did the vehicle have when the last maintenance/tune-up was done?" );

if ( prevMaintenanceMileage === "" || prevMaintenanceMileage < 0 ){

    prevMaintenanceMileage = prompt( "You've input an invalid Previous Maintenance/Tune-up Mileage amount, please try again.\n\n\nWhat mileage did the vehicle have when the last maintenance/tune-up was done?" );

}

prevMaintenanceMileage = parseInt(prevMaintenanceMileage);


var currentMileage = prompt( "What mileage does the vehicle currently have at the moment?" );

if ( currentMileage === "" || currentMileage < 0 ){

    currentMileage = prompt( "You've input an invalid Current Vehicle Mileage amount, please try again.\n\n\nWhat mileage does the vehicle currently have at the moment?" );

}

currentMileage = parseInt(currentMileage);



//RESULT VARIABLES:
var maintenanceCostQuote = 0.00;

var oilMileageDifference = currentMileage - prevOilChangeMileage;

var maintenanceMileageDifference = currentMileage - prevMaintenanceMileage;

var oilChange = ( oilMileageDifference >= oilChangeMileage ) ? "OIL CHANGE: REQUIRED ($" + oilChangeCost + ")\nA required maintenance oil change is required. It has been " + oilChangeMileage + "(+) miles since the last oil change." + (maintenanceCostQuote += oilChangeCost) : "OIL CHANGE: NOT REQUIRED";

var rotateTires = ( oilMileageDifference >= rotateTiresMileage ) ? "\n\nROTATE TIRES: REQUIRED ($" + rotateTiresCost + ")\nTire rotation is required for every " + rotateTiresMileage + "(+) miles since the last oil change." + (maintenanceCostQuote += rotateTiresCost) : "\n\nROTATE TIRES: NOT REQUIRED";


var parts;

if ( maintenanceMileageDifference >= brakesMileage ){

    parts = "\n\nREPLACE BRAKES: REQUIRED ($" + replaceBrakes + ")\nBrakes are required to be replaced every " + brakesMileage + " miles.";

    maintenanceCostQuote += replaceBrakes;

}else{

    parts = "\n\nREPLACE BRAKES: NOT REQUIRED";

}


if ( maintenanceMileageDifference >= sparkPlugMileage ){

    parts += "\n\nREPLACE SPARK PLUGS: REQUIRED ($" + replaceSparkPlugs + ")\nSpark Plugs are required to be replaced every " + sparkPlugMileage + " miles.";

    maintenanceCostQuote += replaceSparkPlugs;

}else{

    parts += "\n\nREPLACE SPARK PLUGS: NOT REQUIRED";

}


if ( currentMileage >= motorMountsMileage ){

    parts += "\n\nREPLACE MOTOR MOUNTS: REQUIRED ($" + replaceMotorMounts + ")\nMotor Mounts need to be replaced every " + motorMountsMileage + " miles.";

    maintenanceCostQuote += replaceMotorMounts;

}else{

    parts += "\n\nREPLACE MOTOR MOUNTS: NOT REQUIRED";

}


var serviceCharge;

if ( maintenanceCostQuote > 0 ){

    serviceCharge = "\n\nSERVICE CHARGE: $" + serviceCost + "\nA service fee charge will be added to the total cost whenever maintenance/tune-ups need to be made to a vehicle.";

    maintenanceCostQuote += serviceCost;

}else{

    serviceCharge = "\n\nSERVICE CHARGE: $0.00\nNo service fee charge will be added since no required maintenance/tune-ups need to be made to the vehicle."

}

var message = "OIL CHANGE & MAINTENANCE CHECK\n\n" + oilChange + rotateTires + parts + serviceCharge + "\n\n\nTOTAL MAINTENANCE COST (QUOTE): $" + maintenanceCostQuote;


//RESULT TO PRINT
console.log(message);   // Display the final message in the console.

alert(message);         // Display the final message as an alert to the user.