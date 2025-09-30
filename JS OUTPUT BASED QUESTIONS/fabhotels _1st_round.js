// DSA Array problem

// Q: Maximum sum of two consecutive element in an array and return the maximum sum?

// output based question
console.log("Start");

setTimeout(() => {
  console.log("Timeout1");
}, 0);

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





