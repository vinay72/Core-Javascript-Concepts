let numbers = [
    5,
    9,
    23,
    54,
    97,
    1
]
console.log(numbers.includes(23)); // true
console.log(numbers.includes(24)); // false

let list = [
  { text: "milk", cost: 4, need: false },
  { text: "eggs", cost: 10, need: true },
  { text: "butter", cost: 5, need: false },
  { text: "bread", cost: 3, need: true },
  { text: "bacon", cost: 12, need: true }
];

console.log(list.some(item => item.need)) // true we have some items that are needed

let numbers8 = [
    5,
    9,
    23,
    54,
    97,
    1
]
console.log(numbers8.every(num => num % 2 != 0)) 
//no is odd number, if every values inside numbers8 array is odd, output is true otherwise false
