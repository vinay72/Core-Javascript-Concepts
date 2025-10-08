// The map() method of Array instances creates a new array populated with the results of 
// calling a provided function on every element in the calling array.


let list = [
  
  { text: "milk", cost: 4, need: false },
  { text: "eggs", cost: 10, need: true },
  { text: "butter", cost: 5, need: false },
  { text: "bread", cost: 3, need: true },
  {text:"bacon", cost:12, need:true}
  

]
let list212 = list.map(function({text, cost, need}){
    if(need){
        return `<li>${text} ${cost}<li/>`
    } 
    else {
        return '';
    }
    
})
let joined = list212.join('')
console.log(joined)