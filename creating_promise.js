let myPromise = new Promise((resolve, reject) => {
  // Perform an asynchronous operation here
  // For example, a network request, a timer, or a file read

  let operationSuccessful = true; // Simulate the outcome of the operation

  if (operationSuccessful) {
    resolve("Data successfully retrieved!"); // Call resolve() on success
  } else {
    reject("Error: Failed to retrieve data."); // Call reject() on failure
  }
});
// new Promise((resolve, reject) => { ... }): This creates a new Promise object. The arrow function passed as an argument is the executor function.
// resolve: This is a function that you call when the asynchronous operation completes successfully. You can pass a value to resolve, which will become the fulfillment value of the Promise.
// reject: This is a function that you call when the asynchronous operation encounters an error. You typically pass an Error object or a descriptive message to reject.
// Asynchronous Logic: Inside the executor function, you place the code that performs your asynchronous task.
// Conditional Calling: Based on the outcome of your asynchronous operation, you either call resolve() or reject().

// consuming a promise
myPromise
  .then((value) => {
      console.log('Promise fulfilled', value);
      
  })
  .catch((error) => {
    console.log('promise rejected', error);
    
  })