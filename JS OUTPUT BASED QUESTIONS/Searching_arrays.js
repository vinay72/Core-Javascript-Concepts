let list = [
  'milk',
  'bread',
  'sausage',
  'orange',
  'pineapple',
  "butter",
  "bacon"
];

// finding the item index within the array

console.log(list.indexOf('butter')) // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.


let list323 = [
  'bacon',
  'eggs',
  'butter',
  'milk',
  'bread',
  'bacon',
  {text:"bread", cost : 3}
]
console.log(list323.indexOf('bacon')) // output is 0 index
console.log(list323.indexOf('bacon', 1)) // start searching the element from index 1 

// lastindexOf searches from end of an array towards the begining of array
console.log(list323.lastIndexOf('bacon'))
console.log(list323.findIndex((item) =>{
  return item.text === 'bread'
}))
// findIndex takes a callback function