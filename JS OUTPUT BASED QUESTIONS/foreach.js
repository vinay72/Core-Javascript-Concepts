let list = [
  
  { text: "milk", cost: 4, need: false },
  { text: "eggs", cost: 10, need: true },
  { text: "butter", cost: 5, need: false },
  { text: "bread", cost: 3, need: true },
  {text:"bacon", cost:12, need:true}
  

]
list.forEach((item) => {
   console.log(item.text, item.cost,item.need)
})