let odd = [1,3,5,7]
let even = [2,4,6,8]
let letters = ['a', 'b', 'c', 'd','e']

// let numbers = odd.concat(even, letters);
// console.log(odd);
// console.log(even);
// console.log(letters);
// console.log(numbers);

// output 

// [ 1, 3, 5, 7 ]
// [ 2, 4, 6, 8 ]
// [ 'a', 'b', 'c', 'd', 'e' ]
// [
//   1,   3, 5,   7,   2,   4,
//   6,   8, 'a', 'b', 'c', 'd',
//   'e'
// ]

// Spread operator
let alphanumeric = [...odd, ...even, ...letters]
console.log(alphanumeric)




