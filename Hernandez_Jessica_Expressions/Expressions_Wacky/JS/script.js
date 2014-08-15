/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 13, 2014
 Week 2
 Expressions Assignment: Wacky
 */

//OVERVIEW: You want to order pizza for dinner, but the "Pizza Script" website is currently malfunctioning. The site instead prompts you with dialogs and input boxes to still be able to take your order online and give you a checkout total price at the end before you submit your order.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CONSTANTS
var INPUT_MESSAGE = "** Please input the corresponding number that indicates your choice.  **";  //This message will be displayed in most prompt messages that require the customer to input a corresponding value to which item they want to choose.

var DELIVERY_PRICE = 3.25;  //This is the standard delivery charge.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//VARIABLES TO DECLARE: These variables will be defined and used in the while-loop to then be displayed in the final result. Most of the variables have been declared outside of the while-loop.
var placeOrderResult;  //This variable will be used as a boolean value to enter and exit the while-loop.

var message;   //This variable will be defined with a specific message depending on the customers order submission approval or decline.

var pizza;  //This variable will be defined with the number of pizzas the customer wants to order.

var pizzaSize;  //This variable will be defined with the size of pizzas the customer wants to order.

var pizzaSizePrice;  //This variable will be defined with the price of the pizzas depending on the pizzaSize the customer orders.

var toppingName;  //This variable will be defined with the name of the topping the customer choose to add to their pizza.

var toppingPrice;  //This variable will be defined with the price of the topping the customer chooses.

var beverageName;  //This variable will be defined with the name of the beverage the customer decides to add to their order.

var beveragePrice;  //This variable will be defined with the price of the beverage the customer chooses.

var dessertName;  //This variable will be defined with the name of the dessert the customer decides to add to their order.

var dessertPrice;  //This variable will be defined with the price of the dessert the customer chooses.

var customerName;  //This variable will be defined with the customers name that's placing the order.

var phoneNum;  //This variable will be defined with the customers contact phone number.

var streetAddress;  //This variable will be defined with the customers delivery street address.

var cityStateZip;  //This variable will be defined with the customers city, state and zip-code portion of their delivery address.

var tipAmount;  //This variable will be defined with the tip amount the customer decides to give the driver.

var subTotal;  //This variable will be defined with increasing sub total of the order.

var orderReview;  //This variable will be defined with final result of the pizza order. This will be a concatenated message that includes the calculated variables with the order items and prices. This will include the sub total, delivery charge, tip amount and order total at the end of the concatenated message.

var orderTotal;  //This variable will be defined with the resulting order total of all the items the user ordered(subTotal) and includes the delivery charge and tip amount.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OVERVIEW MESSAGE FOR THE CUSTOMER
var placeOrder = parseInt( prompt( "Thank you for visiting Pizza Script!\nAt the moment our site is experiencing some technical difficulties, BUT we will still be able to take your order. In order to do so, you will be prompted with a series of dialog boxes requesting your specified input for your order.\n\nWe cannot accept credit cards through this interface, but we will be able to give you a full order price estimate before you actually submit your order. This will allow you time to verify if you have the sufficient funds in cash to therefore place your order.\n\n\nWould you like to place an order?\n\n1 - Yes\n2 - No\n\n" + INPUT_MESSAGE ) );  //This will prompt the user that the Pizza Script website is experiencing technical difficulties but with a series of prompt messages the customer will still be able to place their online order with them. It would require the user to input a number that corresponds to either yes or no to the question if they want to place an order.

if ( placeOrder == 1 )  //This condition verifies that if the customer input the number 1 for yes to place an order, it will then make the placeOrderResult variable true which allows the order process to begin with the while-loop.
{
    placeOrderResult = true;  //This variable will initiate the while-loop.
}

if ( placeOrder == 2 )  //This condition verifies that if the customer input the number 2 for no to place an order, it will therefore not execute the while-loop.
{
    placeOrderResult = false;  //This variable is equal to false to the while-loop will not execute.
    message = "Thank you for visiting Pizza Script; sorry our site wasn't completely functional at the moment.\n\nHave a nice day!";  //The variable message is then defined to display a message to the customer thanking them for visiting the site.
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//THE WHILE-LOOP WILL KEEP THE ORDER PROCESS GOING UNTIL THE placeOrderResult VARIABLE IS FALSE WHICH THEN EXITS THE WHILE-LOOP.
while (placeOrderResult)  //The while-loop begins here and goes through as long as the placeOrderResult variable is true.
{
    var steps = 1;  //This variable is meant to display the step number at the top of the prompt messages to the customer.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //STEP 1: PIZZA AMOUNT TO ORDER
    pizza = parseInt( prompt("STEP " + (steps++) + ": PIZZA\n\nHow many pizza pies would you like to order?") );  //This variable gets defined to the number of pizzas the customer wants to order.

    //STEP 2: PIZZA MENU
    var pizzaMenu = parseInt( prompt("STEP " + (steps++) + ": PIZZA SIZE\n\nWhat size pizza would you like to order?\n\n1 - Medium  @ $8.00/pie\n2 - Large      @ $10.00/pie\n3 - Jumbo    @ $14.00/pie\n\n" + INPUT_MESSAGE ) );  //This variable gets defined the the corresponding number of the item they choose from the pizza size menu.

    if ( pizzaMenu == 1 )  //This condition verifies that if the customer input the number 1 for a medium pizza.
    {
        pizzaSize = "Medium"; //This variable gets defined to medium since the condition is truly equal to menu choice 1.
        pizzaSizePrice = 8.00;  //This variable gets defined to the price of the medium pizza since the condition is equal to menu choice 1.
    }

    if ( pizzaMenu == 2 )  //This condition verifies that if the customer input the number 2 for a large pizza.
    {
        pizzaSize = "Large";  //This variable gets defined to large since the condition is truly equal to menu choice 2.
        pizzaSizePrice = 10.00;  //This variable gets defined to the price of the large pizza since the condition is equal to menu choice 2.
    }

    if ( pizzaMenu == 3 )  //This condition verifies that if the customer input the number 3 for a jumbo pizza.
    {
        pizzaSize = "Jumbo";  //This variable gets defined to jumbo since the condition is truly equal to menu choice 3.
        pizzaSizePrice = 14.00;  //This variable gets defined to the price of the jumbo pizza since the condition is equal to menu choice 3.
    }

    subTotal = parseFloat(  Math.round( (pizzaSizePrice * pizza) * 100 ) / 100 );  //This variable gets defined to the sub total price of the number of pizzas times the price of the pizza size the customer order.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //STEP 3: TOPPINGS MENU
    var toppingMenu = parseInt( prompt("STEP " + (steps++) + ": PIZZA TOPPINGS\nSub total: $" + subTotal.toFixed(2) + "\n\nWhich topping would you like to add to your " + pizza + " pizza(s)?\n\n1 - Pepperoni ..................... (+$1.50)\n2 - Ham & Pineapple .......... (+$2.50)\n3 - Sausage ....................... (+$1.50)\n4 - Extra Cheese ................ (+$0.75)\n5 - No Extra Topping ......... (+$0.00)\n\n" + INPUT_MESSAGE ) );  //This variable gets defined the the corresponding number of the item they choose from the pizza size menu.

    if ( toppingMenu == 1 )  //This condition verifies that if the customer input the number 1 for a pepperoni topping.
    {
        toppingName = "Pepperoni";  //This variable gets defined to pepperoni since the condition is truly equal to menu choice 1.
        toppingPrice = 1.50;  //This variable gets defined to the price of the pepperoni topping since the condition is equal to menu choice 1.
    }

    if ( toppingMenu == 2 )  //This condition verifies that if the customer input the number 2 for a ham and pineapple topping.
    {
        toppingName = "Ham & Pineapple";  //This variable gets defined to ham and pineapple since the condition is truly equal to menu choice 2.
        toppingPrice = 2.50;  //This variable gets defined to the price of the ham and pineapple topping since the condition is equal to menu choice 2.
    }

    if ( toppingMenu == 3 )  //This condition verifies that if the customer input the number 3 for a sausage topping.
    {
        toppingName = "Sausage";  //This variable gets defined to sausage since the condition is truly equal to menu choice 3.
        toppingPrice = 1.50;  //This variable gets defined to the price of the sausage topping since the condition is equal to menu choice 3.
    }

    if ( toppingMenu == 4 )  //This condition verifies that if the customer input the number 4 for an extra cheese topping.
    {
        toppingName = "Extra Cheese";  //This variable gets defined to extra cheese since the condition is truly equal to menu choice 4.
        toppingPrice = 0.75;  //This variable gets defined to the price of the extra cheese topping since the condition is equal to menu choice 4.
    }

    if ( toppingMenu == 5 )  //This condition verifies that if the customer input the number 5 for no pizza topping.
    {
        toppingName = "No";  //This variable gets defined to no topping since the condition is truly equal to menu choice 5.
        toppingPrice = 0.00;  //This variable gets defined to the price of no topping since the condition is equal to menu choice 5.
    }

    subTotal += toppingPrice;  //The subTotal variable gets updated to the current subTotal amount plus the price of the topping the customer added.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //STEP 4: BEVERAGE MENU
    var beverageMenu = parseInt( prompt("STEP " + (steps++) + ": BEVERAGES\nSub total: $" + subTotal.toFixed(2) + "\n\nWhat beverage would you like to add to your order?\nEach beverage is a standard 2L bottle at a price of $1.25.\n\n1 - Cola Cola\n2 - Sprite\n3 - Fanta\n4 - No Beverage\n\n" + INPUT_MESSAGE ) );  //This variable gets defined the the corresponding number of the item they choose from the pizza size menu.

    if ( beverageMenu == 1 )  //This condition verifies that if the customer input the number 1 for a coca cola beverage.
    {
        beverageName = "Cola Cola (2L Bottle)";  //This variable gets defined to the coca cola beverage since the condition is truly equal to menu choice 1.
        beveragePrice = 1.25;  //This variable gets defined to the price of a beverage since the condition is equal to menu choice 1.
    }

    if ( beverageMenu == 2 )  //This condition verifies that if the customer input the number 2 for a sprite beverage.
    {
        beverageName = "Sprite (2L Bottle)";  //This variable gets defined to the sprite beverage since the condition is truly equal to menu choice 2.
        beveragePrice = 1.25;  //This variable gets defined to the price of a beverage since the condition is equal to menu choice 2.
    }

    if ( beverageMenu == 3 )  //This condition verifies that if the customer input the number 3 for a fanta beverage.
    {
        beverageName = "Fanta (2L Bottle)";  //This variable gets defined to the fanta beverage since the condition is truly equal to menu choice 3.
        beveragePrice = 1.25;  //This variable gets defined to the price of a beverage since the condition is equal to menu choice 3.
    }

    if ( beverageMenu == 4 )  //This condition verifies that if the customer input the number 4 for no beverage.
    {
        beverageName = "No Beverage";  //This variable gets defined to no beverage since the condition is truly equal to menu choice 4.
        beveragePrice = 0.00;  //This variable gets defined to the price of no beverage since the condition is equal to menu choice 4.
    }

    subTotal += beveragePrice; //The subTotal variable gets updated to the current subTotal amount plus the price of the beverage the customer added.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //STEP 5: DESSERT MENU
    var dessertMenu = parseInt( prompt("STEP " + (steps++) + ": DESSERTS\nSub total: $" + subTotal.toFixed(2) + "\n\nWould you like to include any of our dessert options to your order?\n\n1 - Cinnamon Bites .............. (+$3.00)\n2 - Chocolate Cake(x2) ........ (+$5.00)\n3 - No Dessert ..................... (+$0.00)\n\n" + INPUT_MESSAGE ) );  //This variable gets defined the the corresponding number of the item they choose from the pizza size menu.

    if ( dessertMenu == 1 )
    {
        dessertName = "Cinnamon Bites";
        dessertPrice = 3.00;
    }

    if ( dessertMenu == 2 )
    {
        dessertName = "Chocolate Cake(x2)";
        dessertPrice = 5.00;
    }

    if ( dessertMenu == 3 )
    {
        dessertName = "No";
        dessertPrice = 0.00;
    }

    subTotal += dessertPrice;  //The subTotal variable gets updated to the current subTotal amount plus the price of the dessert the customer added.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //MESSAGE TO LET THE CUSTOMER KNOW THE ORDER PLACEMENT PROCESS IS ALMOST DONE
    console.log("Almost done taking your order, just a few more prompts.");  //Outputs a message to the console.

    alert("Almost done taking your order, just a few more prompts.");  //Outputs a message in an alert box to the customer.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //STEP 6: COLLECTING CUSTOMERS' INFORMATION
    customerName = prompt("STEP " + steps + ": CUSTOMER INFORMATION\n\nWhat is your name?");

    phoneNum = prompt("STEP " + steps + ": CUSTOMER INFORMATION CONTINUED...\n\nPlease input a contact phone number.\n(Ex: (xxx) xxx-xxxx )");

    streetAddress = prompt("STEP " + steps + ": CUSTOMER INFORMATION CONTINUED...\n\nPlease input your street address of your delivery; include your apartment number if applicable.\n(Ex: 12345 N.W. 77 Street, Apt# 202 )");

    cityStateZip = prompt("STEP " + (steps++) + ": CUSTOMER INFORMATION CONTINUED...\n\nPlease input your city, state and zip-code of your delivery.\n(Ex: Miami, FL 33131 )");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //STEP 7: DRIVER'S TIP AMOUNT
    var tip = parseInt( prompt("STEP " + steps + ": DRIVER TIP\nSub total: $" + subTotal.toFixed(2) + "\n\nWould you like to give a tip to the driver?\n\n1 - Yes\n2 - No\n\n" + INPUT_MESSAGE ) );  //This variable gets defined the the corresponding number of the customers decision to give the driver a tip or not.

    if ( tip == 1 )
    {
        tipAmount = parseFloat( prompt("How much tip would you like to give the driver?\n\n** Do not include the '$' sign, just the amount. **") );
    }

    if ( tip == 2 )
    {
        tipAmount = 0.00;
    }

    subTotal += tipAmount;  //The subTotal variable gets updated to the current subTotal amount plus the amount of tip the customer wants to give the driver.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //ORDER TOTAL
    orderTotal = subTotal + DELIVERY_PRICE;  //orderTotal gets defined to the total price of the subTotal plus the standard delivery charge.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //RESULTING ORDER MESSAGE AND PRICE TOTALS TO DISPLAY TO THE CUSTOMER
    orderReview = "ORDER REVIEW:\n** Please review your order carefully before submitting on the following prompt screen. **\n\nPIZZA:\n" + pizza + " " + pizzaSize + " Pizza(s) @ $" + pizzaSizePrice.toFixed(2) + " each.\nWith " + toppingName + " topping @ $" + toppingPrice.toFixed(2) + ".\n\nBEVERAGE:\n" + beverageName + " @ $" + beveragePrice.toFixed(2) + ".\n\nDESSERT:\n" + dessertName + " dessert @ $" + dessertPrice.toFixed(2) + ".\n\nCUSTOMER DETAILS:\nThis order will be delivered to: " + customerName + "\nTo the address:\n" + streetAddress + " " + cityStateZip + "\nContact Phone #: " + phoneNum + "\n\nSub Total: ........................... $" + subTotal.toFixed(2) + "\nDelivery Charge: ................. $" + DELIVERY_PRICE + "\nTip Amount: ....................... $" + tipAmount.toFixed(2) + "\n\nORDER TOTAL: .................... $" + orderTotal.toFixed(2) + "\n\n** Please remember this will be a cash on delivery order. **";  //Defining the variable to the concatenation of the resulting order review message to a string that will be used to display to the customer.


    console.log("\n\n" + orderReview);  //Display the resulting order review message in the console.

    alert(orderReview);  //Display the resulting order review message in an alert prompt for the customer to see to help them decide if they are going to place their online order.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var submitOrder = parseInt( prompt("Would you like to submit your pizza order?\nOrder Total: $" + orderTotal.toFixed(2) + "\n\n1 - Yes\n2 - No\n\n" + INPUT_MESSAGE) );

    if ( submitOrder == 1 )
    {
        message = "Thank you for placing your order and choosing Pizza Script! We appreciate your business.\n\nPlease allow up to 40 minutes for delivery of your order.\nHave a nice day!";
    }

    if ( submitOrder == 2 )
    {
        message = "Your order has been removed from queue.\n\nThank you for visiting Pizza Scrip!\nHave a nice day!";
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    placeOrderResult = false;  //placedOrderResult is set to false at the very end of the while-loop to avoid an infinite loop occurring.
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FINAL RESULTING MESSAGES FOR THE CUSTOMER
console.log("\n\n" + message);  // Display the resulting order message in the console.

alert(message);  // Display the resulting order message as an alert prompt to the customer.