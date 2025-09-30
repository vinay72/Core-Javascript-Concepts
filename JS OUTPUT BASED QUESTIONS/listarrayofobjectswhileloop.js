let list = [
  
  { text: "milk", cost: 4, need: false },
  { text: "eggs", cost: 10, need: true },
  { text: "butter", cost: 5, need: false },
  { text: "bread", cost: 3, need: true },
  {text:"bacon", cost:12, need:true}
  

]
let index = 0
let item = list[index]
// we can also have access to index
while(item){
   console.log(item.text, item.cost, item.need)
    item = list[index++]

}

console.log(ListItem(list));

// modified version 

// let list = [
  
//   { text: "milk", cost: 4, need: false },
//   { text: "eggs", cost: 10, need: true },
//   { text: "butter", cost: 5, need: false },
//   { text: "bread", cost: 3, need: true },
//   {text:"bacon", cost:12, need:true}
  

// ]
// let index = 0
// let item; 

// while(item = list[index++]){
//    console.log(item.text, item.cost, item.need)
//     // item = list[index++]

// }


// console.log(ListItem(list));