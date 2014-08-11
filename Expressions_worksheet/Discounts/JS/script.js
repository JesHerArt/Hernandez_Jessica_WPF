/* Jessica J. Hernandez
 ID: 0004631401
 August 10, 2014
 Expressions Worksheet Assignment
 Problem: Discounts
 */

//OVERVIEW: Calculate the price with tax and without tax of an item that has a discount.



//GIVENS
var itemName = prompt("This calculation will give you the price of your item to purchase with sales tax and without sales tax after the discount has been applied.\n\nWhat is the name of item you are purchasing?");  //Prompting the user to enter the name of the item they are purchasing.

var originalPrice = prompt("What is the original price of the " + itemName + "?\n***Do not include the dollar sign, just the price.***");   //Prompting the user to enter the original price of their item.

var discount = prompt("What discount percentage does the " + itemName + " have?\n***Do not enter the % sign, just the discount percentage number.***");   //Prompting the user to enter the percentage amount of discount their item has.

var salesTax = prompt("What is the tax percentage in your area?\n***Do not enter the % sign, just the tax percentage number.***");   //Prompting the user to enter the percentage amount of discount their item has.



//RESULT VARIABLES
var discountPercent = parseInt(discount) * 0.01;

var salesTaxPercent = parseInt(salesTax) * 0.01;

var itemWithDiscount = parseFloat(originalPrice) - parseFloat(originalPrice) * discountPercent;

var itemWithTax = itemWithDiscount + itemWithDiscount * salesTaxPercent;

var itemWithNoTax = itemWithDiscount;



//RESULT TO PRINT
var message = "Your " + itemName + " was originally $" + originalPrice + ", but after a " + discount + "% discount, it is now $" + itemWithNoTax + " without tax, and $" + itemWithTax + " with tax.";   //Concatenating the resulting message to a string.

console.log(message);   // Display the resulting message in the console.

alert(message);         // Display the resulting message as an alert to the user.