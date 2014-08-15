/* Jessica J. Hernandez
 ID: 0004631401
 WPF 201408 Section 01
 August 13, 2014
 Week 2
 Expressions Assignment: Wacky
 */

//OVERVIEW: You want to order pizza for dinner, but the "Pizza Script" website is currently malfunctioning. The site instead prompts you with dialogs and input boxes to still be able to take your order online and give you a checkout total price at the end before you submit your order.

var inputMessage = "** Please input the corresponding number that indicates your choice.  **"

var placeOrderResult;

var message;

var pizza;

var pizzaSize;

var pizzaSizePrice;

var toppingName;

var toppingPrice;

var beverageName;

var beveragePrice;

var dessertName;

var dessertPrice;

var customerName;

var phoneNum;

var streetAddress;

var cityStateZip;

var tipAmount;

var DELIVERY_PRICE = 3.25;

var subTotal;

var orderReview;

var orderTotal;

var placeOrder = parseInt( prompt( "Thank you for visiting Pizza Script!\nAt the moment our site is experiencing some technical difficulties, BUT we will still be able to take your order. In order to do so, you will be prompted with a series of dialog boxes requesting your specified input for your order.\n\nWe cannot accept credit cards through this interface, but we will be able to give you a full order price estimate before you actually submit your order. This will allow you time to verify if you have the sufficient funds in cash to therefore place your order.\n\n\nWould you like to place an order?\n\n1 - Yes\n2 - No\n\n" + inputMessage ) );

if ( placeOrder == 1 )
{
    placeOrderResult = true;
}

if ( placeOrder == 2 )
{
    placeOrderResult = false;
    message = "Thank you for visiting Pizza Script; sorry our site wasn't completely functional at the moment.\n\nHave a nice day!";
}


while (placeOrderResult)
{
    var steps = 1;

    pizza = parseInt( prompt("STEP " + (steps++) + ": PIZZA\n\nHow many pizza pies would you like to order?") );

    var pizzaMenu = parseInt( prompt("STEP " + (steps++) + ": PIZZA SIZE\n\nWhat size pizza would you like to order?\n\n1 - Medium  @ $8.00/pie\n2 - Large      @ $10.00/pie\n3 - Jumbo    @ $14.00/pie\n\n" + inputMessage ) );

    if ( pizzaMenu == 1 )
    {
        pizzaSize = "Medium";
        pizzaSizePrice = 8.00;
    }

    if ( pizzaMenu == 2 )
    {
        pizzaSize = "Large";
        pizzaSizePrice = 10.00;
    }

    if ( pizzaMenu == 3 )
    {
        pizzaSize = "Jumbo";
        pizzaSizePrice = 14.00;
    }

    subTotal = parseFloat(  Math.round( (pizzaSizePrice * pizza) * 100 ) / 100 );


    var toppingMenu = parseInt( prompt("STEP " + (steps++) + ": PIZZA TOPPINGS\nSub total: $" + subTotal.toFixed(2) + "\n\nWhich topping would you like to add to your " + pizza + " pizza(s)?\n\n1 - Pepperoni ..................... (+$1.50)\n2 - Ham & Pineapple .......... (+$2.50)\n3 - Sausage ....................... (+$1.50)\n4 - Extra Cheese ................ (+$0.75)\n5 - No Extra Topping ......... (+$0.00)\n\n" + inputMessage ) );

    if ( toppingMenu == 1 )
    {
        toppingName = "Pepperoni";
        toppingPrice = 1.50;
    }

    if ( toppingMenu == 2 )
    {
        toppingName = "Ham & Pineapple";
        toppingPrice = 2.50;
    }

    if ( toppingMenu == 3 )
    {
        toppingName = "Sausage";
        toppingPrice = 1.50;
    }

    if ( toppingMenu == 4 )
    {
        toppingName = "Extra Cheese";
        toppingPrice = 0.75;
    }

    if ( toppingMenu == 5 )
    {
        toppingName = "No";
        toppingPrice = 0.00;
    }

    subTotal += toppingPrice;


    var beverageMenu = parseInt( prompt("STEP " + (steps++) + ": BEVERAGES\nSub total: $" + subTotal.toFixed(2) + "\n\nWhat beverage would you like to add to your order?\nEach beverage is a standard 2L bottle at a price of $1.25.\n\n1 - Cola Cola\n2 - Sprite\n3 - Fanta\n4 - No Beverage\n\n" + inputMessage ) );

    if ( beverageMenu == 1 )
    {
        beverageName = "Cola Cola (2L Bottle)";
        beveragePrice = 1.25;
    }

    if ( beverageMenu == 2 )
    {
        beverageName = "Sprite (2L Bottle)";
        beveragePrice = 1.25;
    }

    if ( beverageMenu == 3 )
    {
        beverageName = "Fanta (2L Bottle)";
        beveragePrice = 1.25;
    }

    if ( beverageMenu == 4 )
    {
        beverageName = "No Beverage";
        beveragePrice = 0.00;
    }

    subTotal += beveragePrice;


    var dessertMenu = parseInt( prompt("STEP " + (steps++) + ": DESSERTS\nSub total: $" + subTotal.toFixed(2) + "\n\nWould you like to include any of our dessert options to your order?\n\n1 - Cinnamon Bites .............. (+$3.00)\n2 - Chocolate Cake(x2) ........ (+$5.00)\n3 - No Dessert ..................... (+$0.00)\n\n" + inputMessage ) );

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

    subTotal += dessertPrice;


    console.log("Almost done taking your order, just a few more prompts.");
    alert("Almost done taking your order, just a few more prompts.");


    customerName = prompt("STEP " + steps + ": CUSTOMER INFORMATION\n\nWhat is your name?");

    phoneNum = prompt("STEP " + steps + ": CUSTOMER INFORMATION CONTINUED...\n\nPlease input a contact phone number.\n(Ex: (xxx) xxx-xxxx )");

    streetAddress = prompt("STEP " + steps + ": CUSTOMER INFORMATION CONTINUED...\n\nPlease input your street address of your delivery; include your apartment number if applicable.\n(Ex: 12345 N.W. 77 Street, Apt# 202 )");

    cityStateZip = prompt("STEP " + (steps++) + ": CUSTOMER INFORMATION CONTINUED...\n\nPlease input your city, state and zip-code of your delivery.\n(Ex: Miami, FL 33131 )");



    var tip = parseInt( prompt("STEP " + steps + ": DRIVER TIP\nSub total: $" + subTotal.toFixed(2) + "\n\nWould you like to give a tip to the driver?\n\n1 - Yes\n2 - No\n\n" + inputMessage ) );

    if ( tip == 1 )
    {
        tipAmount = parseFloat( prompt("How much tip would you like to give the driver?\n\n** Do not include the '$' sign, just the amount. **") );
    }

    if ( tip == 2 )
    {
        tipAmount = 0.00;
    }

    subTotal += tipAmount;


    orderTotal = subTotal + DELIVERY_PRICE;


    orderReview = "ORDER REVIEW:\n** Please review your order carefully before submitting on the following prompt screen. **\n\nPIZZA:\n" + pizza + " " + pizzaSize + " Pizza(s) @ $" + pizzaSizePrice.toFixed(2) + " each.\nWith " + toppingName + " topping @ $" + toppingPrice.toFixed(2) + ".\n\nBEVERAGE:\n" + beverageName + " @ $" + beveragePrice.toFixed(2) + ".\n\nDESSERT:\n" + dessertName + " dessert @ $" + dessertPrice.toFixed(2) + ".\n\nCUSTOMER DETAILS:\nThis order will be delivered to: " + customerName + "\nTo the address:\n" + streetAddress + " " + cityStateZip + "\nContact Phone #: " + phoneNum + "\n\nSub Total: ........................... $" + subTotal.toFixed(2) + "\nDelivery Charge: ................. $" + DELIVERY_PRICE + "\nTip Amount: ....................... $" + tipAmount.toFixed(2) + "\n\nORDER TOTAL: .................... $" + orderTotal.toFixed(2) + "\n\n** Please remember this will be a cash on delivery order. **";


    console.log("\n\n" + orderReview);
    alert(orderReview);


    var submitOrder = parseInt( prompt("Would you like to submit your pizza order?\nOrder Total: $" + orderTotal.toFixed(2) + "\n\n1 - Yes\n2 - No\n\n" + inputMessage) );

    if ( submitOrder == 1 )
    {
        message = "Thank you for placing your order and choosing Pizza Script! We appreciate your business.\n\nPlease allow up to 40 minutes for delivery of your order.\nHave a nice day!";
    }

    if ( submitOrder == 2 )
    {
        message = "Your order has been removed from queue.\n\nThank you for visiting Pizza Scrip!\nHave a nice day!";
    }


//    message = "testing";
    placeOrderResult = false;
}



//GIVENS



//RESULT VARIABLES



//RESULT TO PRINT
//var orderReview;

//var message;  //Concatenating the resulting message to a string.

console.log("\n\n" + message);  // Display the resulting message in the console.

alert(message);  // Display the resulting message as an alert to the user.