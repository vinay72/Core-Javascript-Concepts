let name = {
  firstname: "Akshay",
  lastname: "Saini"

}
// Here, a JavaScript object name is declared with two properties: firstname and lastname, each containing a string value

let printName = function(hometown, state) {
  console.log(this.firstname + " " + this.lastname + " , " + hometown + " , " + state)
}
// A function named printName is defined, which takes two parameters: hometown and state. Inside the function, it logs the concatenation of this.firstname, this.lastname, hometown, and state.

Function.prototype.mybind = function(...args) {
  let obj = this,
    params = args.slice(1);
  return function(...args2) {
    obj.apply(args[0], [...params, ...args2]);
  }
}
// This code is adding a method named mybind to the Function prototype.
//  The mybind method is intended to mimic the functionality of the built-in bind method in JavaScript. 
//  It accepts any number of arguments using the rest parameter syntax (...args). 
//  Inside mybind, it captures this (which refers to the function to which mybind is applied), extracts the arguments after the first one (args.slice(1)), and returns a new function. 
//  This new function, when called, will invoke the original function (obj) with a specified context (args[0]) and a combination of the original parameters and the parameters passed to the new function.

let printMyName2 = printName.mybind(name, "Dehradun");
// This line demonstrates the usage of the custom mybind method.
//  It binds the printName function to the name object and provides "Dehradun" as the first argument to printName, which will be passed as the hometown parameter.


printMyName2("Uttrakhand")

// Finally, this line invokes the printMyName2 function with "Uttrakhand" as the argument for the state parameter.
//  Since printMyName2 is bound using mybind, it retains the name object as its context and "Dehradun" as its first argument, so when it's called with "Uttrakhand", it logs "Akshay Saini , Dehradun , Uttrakhand" to the console.
