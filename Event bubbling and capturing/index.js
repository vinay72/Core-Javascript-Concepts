// EVENT BUBBLING

// document.querySelector("#grandparent")
// .addEventListener('click', () => {
//   console.log("Grandparent clicked");
  
// }, false)
// document.querySelector("#parent")
// .addEventListener('click', () => {
//   console.log("parent clicked");
  
// }, false)
// document.querySelector("#child")
// .addEventListener('click', () => {
//   console.log("child clicked");
  
// }, false)

// when we put false as third parameters to our three divs event handlers it behaves in bubbling mode 
// and if we change it to true, it behaves in the capturing mode

// EVENT CAPTURING

document.querySelector("#grandparent")
.addEventListener('click', () => {
  console.log("Grandparent clicked");
  
}, true)
document.querySelector("#parent")
.addEventListener('click', () => {
  console.log("parent clicked");
  
}, true)
document.querySelector("#child")
.addEventListener('click', () => {
  console.log("child clicked");
  
}, true)



