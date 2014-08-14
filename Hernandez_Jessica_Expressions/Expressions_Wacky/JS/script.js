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

var deliveryPrice;

var subTotal;

var orderReview;

var submitOrder;

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




    }



//GIVENS



//RESULT VARIABLES



//RESULT TO PRINT
//var orderReview;

//var message;  //Concatenating the resulting message to a string.

console.log(message);  // Display the resulting message in the console.

alert(message);  // Display the resulting message as an alert to the user.