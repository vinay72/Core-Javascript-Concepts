let list = [
  { text: "milk", cost: 4, need: false },
  { text: "eggs", cost: 10, need: true },
  { text: "butter", cost: 5, need: false },
  { text: "bread", cost: 3, need: true },
  { text: "bacon", cost: 12, need: true }
];

// index = position, item = object
for (let [index, item] of list.entries()) {
  console.log(index, item);
}
// now if we want to access index we have to use entries() it provides an iterator
// An iterator is a special kind of object that produces a sequence of values

// best way to calculate the sum of all costs

let list123 = [
  { text: "milk", cost: 4, need: false },
  { text: "eggs", cost: 10, need: true },
  { text: "butter", cost: 5, need: false },
  { text: "bread", cost: 3, need: true },
  { text: "bacon", cost: 12, need: true }
];

let totalCost = list123.reduce((sum, item) => sum + item.cost, 0)
console.log(totalCost)


// .reduce((accumulator, currentItem) => ..., initialValue)

// sum → keeps track of the running total

// item.cost → adds each cost

// 0 → initial value of sum