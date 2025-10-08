// filter accepts a callback function that will test each element in the array and if the
// test is true , that element will be in the new filtered array, if it is false the it 
// will be lefout. we want only the items that are needed.



let list = [
  
  { text: "milk", cost: 4, need: false },
  { text: "eggs", cost: 10, need: true },
  { text: "butter", cost: 5, need: false },
  { text: "bread", cost: 3, need: true },
  {text:"bacon", cost:12, need:true}
  

]
let filteredarray = list.filter(item => item.need)
console.log(filteredarray)


