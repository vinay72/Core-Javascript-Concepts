let list = [
    'eggs',
    'butter',
    'milk',
    'bread',
    'bacon'
]
console.log(list.sort()) 
// ["bacon", "bread", "butter", "eggs", "milk"]
list.sort((a, b) => {

     if (a === b) return 0;
     if ( a > b) return -1; // sorting in descending order
     return 1;

    // 0, a==b, there is no change
    // -1, a should be sorted before b
    // 1, b should be sorted before a
})
console.log(list)
// ["milk", "eggs", "butter", "bread", "bacon"]

let list123 = [
  { text: "milk", cost: 4, need: false },
  { text: "eggs", cost: 10, need: true },
  { text: "butter", cost: 5, need: false },
  { text: "bread", cost: 3, need: true },
  { text: "bacon", cost: 12, need: true }
];
console.log(list123.sort())
list123.sort((a, b) => {

     if (a.text === b.text) return 0;
     if ( a.text > b.text) return -1; // sorting in descending order
     return 1;

    // 0, a==b, there is no change
    // -1, a should be sorted before b
    // 1, b should be sorted before a
})
console.log(list123)