// In functional programming, function composition is a powerful technique that allows developers to combine multiple functions into a single function. This compositional approach promotes code reuse, modularity, and readability. In JavaScript, the compose function plays a central role in enabling function composition.

// Understanding Function Composition
// Function composition is the process of chaining together multiple functions to form a new function. It involves applying a series of transformations or operations to an input value, where the output of one function becomes the input of the next function in the composition chain.

// The compose function takes in two or more functions and returns a new function that applies these functions in right-to-left order. This means that the rightmost function is applied first, followed by the next function to its left, and so on.

// EXAMPLES

const add5 = (x) => x + 5;
const multiplyBy3 = (x) => x * 3;
const subtract10 = (x) => x - 10;

const composedFunction = compose(subtract10, multiplyBy3, add5);
const result = composedFunction(7);

console.log(result); // Output: 26

// This line 14 calls the composed function with an argument of 7. Let's break down the composition:

// First, add5 is applied to 7: add5(7) returns 7 + 5 = 12.
// Next, multiplyBy3 is applied to the result of add5: multiplyBy3(12) returns 12 * 3 = 36.
// Finally, subtract10 is applied to the result of multiplyBy3: subtract10(36) returns 36 - 10 = 26.

// Implementing the compose Function
// To harness the power of function composition, we need to define the compose function. Here's a simple implementation:

const compose = (...functions) => {
  return (input) => {
    return functions.reduceRight((acc, fn) => {
      return fn(acc);
    }, input);
  };
};

// In this implementation, the compose function accepts any number of functions as arguments using the spread operator ...functions.
//  It returns a new function that iterates over the functions in reverse order using reduceRight, applying each function to the accumulated result.