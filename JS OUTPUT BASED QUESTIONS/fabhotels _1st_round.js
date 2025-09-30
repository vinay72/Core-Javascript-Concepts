// DSA Array problem

// Q: Maximum sum of two consecutive element in an array and return the maximum sum?

// output based question
console.log("Start");

setTimeout(() => {
  console.log("Timeout1");
}, 0);

output 
Start
Timeout1 - goes to callback queue

const promise = new Promise((resolve, reject) => {
    console.log("Promise constructor");
  resolve("resolved")
});
promise.then((res) => {
  console.log(res);
});

setTimeout(() => {
  console.log("Timeout2");
}, 0);

console.log("Last console.log");

output

Promise constructor
Last console.log
resolved
Timeout2

Execution order

Synchronous code runs first

"Promise constructor" is logged immediately when the Promise is created.

"Last console.log" is logged next (still synchronous).

Microtasks (Promise callbacks) run after all synchronous code

The .then(...) callback is added to the microtask queue.

So "resolved" will be printed after the synchronous code finishes.

Macrotasks (setTimeout) run after microtasks

"Timeout2" is logged last.




// there is an array of objects
// const users = [
// {
// name: "vinay",
// id: 1,
// degrees: ["mtech", "b-tech"]
// },
// {
// name: "vinay68686",
// id: 2,
// degrees: ["mtech", "b-tech"]
// }
// ]

// now add one function and achieve this output 
//  [
// {
// name: "vinay"
// id: 1,
// degrees: ["mtech", "b-tech", "phd"]
// },
// {
// name: "vinay"
// id: 1,
// degrees: ["mtech", "b-tech", "phd"]
// }
// ]

Solution below - 

  const updatedUsers = users.map((user, index) => {
  return {
    ...user,
    id: 1, // force id = 1 for all
    degrees: [...user.degrees, "phd"] // add phd
  };
});

console.log(updatedUsers);



// output based
console.log(c)
function f(){
var c = "vinay"
}
f()
console.log(c)

Solution - ReferenceError: c is not defined

  Step 1: console.log(c) (before function f is called)

At this point, JavaScript looks for c in the global scope.

But c has never been declared in the global scope.

var c = "vinay" exists only inside the function f, so it’s not visible outside.

Since there is no global c, JavaScript throws a ReferenceError: c is not defined.

⚠️ The code won’t even reach later lines because of this error.

Step 2: The function f()

Inside f, you declare:

var c = "vinay"


This c exists only inside the function f (function scope).
It is destroyed once f finishes execution.

So the c defined here does not affect the outside/global scope.

Step 3: console.log(c) (after calling f)

If somehow the first console.log(c) wasn’t there, and your code was:

function f(){
  var c = "vinay"
}
f()
console.log(c)


You’d still get ReferenceError: c is not defined because c is not global, only local to f.





