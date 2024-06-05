// Here are some basic examples of using ...args
function logArguments(...args) {
  args.forEach(arg => console.log(arg));
}

logArguments('apple', 'banana', 'orange');
const abc = (...args) => {
    args.forEach(arg => console.log(arg));
}
abc(1,2,3,4,5)

function multiply(factor, ...numbers) {
  return numbers.map(num => num * factor);
}

console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]


function concatenateStrings(...strings) {
  return strings.join(' ');
}

console.log(concatenateStrings('Hello', 'world')); // Output: Hello world
console.log(concatenateStrings('I', 'love', 'coding')); // Output: I love coding


function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50
