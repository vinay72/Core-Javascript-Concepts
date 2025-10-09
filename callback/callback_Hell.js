// The two issues which we face while using callbacks are - 
// 1. CALLBACK HELL
// 2. INVERSION OF CONTROL
// with using callbacks, we can do all asynchronous tasks in javascript

// Callback Hell, also known as the "Pyramid of Doom," is a common anti-pattern in JavaScript,
// particularly when dealing with multiple asynchronous operations that are dependent on each other.
// It arises when numerous callback functions are nested deeply within one another, 
// leading to code that becomes increasingly difficult to read, understand, and maintain.

// INVERSION OF CONTROL - YOU LOOSE THE CONTROL OF YOUR CODE, WHEN WE ARE USING CALLBACKS.
// whenever we have callback function and we pass it to some other function, we are giving control of our function
// our piece of written code to some other code and we dont know what is happening behind the scenes now.
// this is a very important problem that we face when we are using callbacks.





console.log("Namaste");
console.log("JavaScript");
console.log("Season 2");
// Namaste
// JavaScript
// Season 2



console.log("Namaste");
setTimeout(function () {
  console.log("JavaScript");
}, 5000);
console.log("Season 2");
// Namaste
// Season 2
// JavaScript

// 💡 Here we are delaying the execution using callback approach of setTimeout.
// 🛒 e-Commerce web app situation
// Assume a scenario of e-Commerce web, where one user is placing order, he has added items like, shoes, pants and kurta in cart and now he is placing order. So in backend the situation could look something like this.

const cart = ["shoes", "pants", "kurta"];
// Two steps to place a order
// 1. Create a Order
// 2. Proceed to Payment

// It could look something like this:
api.createOrder();
api.proceedToPayment();
// Assumption, once order is created then only we can proceed to payment, so there is a dependency. So How to manage this dependency. Callback can come as rescue, How?

api.createOrder(cart, function () {
  api.proceedToPayment();
});
// 💡 Over here `createOrder` api is first creating a order then it is responsible to call `api.proceedToPayment()` as part of callback approach.
// To make it a bit complicated, what if after payment is done, you have to show Order summary by calling api.showOrderSummary() and now it has dependency on api.proceedToPayment() Now my code should look something like this:

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary();
  });
});
// Now what if we have to update the wallet, now this will have a dependency over showOrderSummary

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});


api.createOrder(cart, function () {
  api.proceedToPayment();
});

