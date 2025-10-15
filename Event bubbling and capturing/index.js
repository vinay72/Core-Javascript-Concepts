// EVENT BUBBLING

document.querySelector("#grandparent")
.addEventListener('click', () => {
  console.log("Grandparent clicked");
  
}, false)
document.querySelector("#parent")
.addEventListener('click', () => {
  console.log("parent clicked");
  
}, false)
document.querySelector("#child")
.addEventListener('click', () => {
  console.log("child clicked");
  
}, false)

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

// mix and match


document.querySelector("#grandparent")
.addEventListener('click', () => {
  console.log("Grandparent clicked");
  
}, true) // event capturing
document.querySelector("#parent")
.addEventListener('click', () => {
  console.log("parent clicked");
  
}, false) // event bubbling
document.querySelector("#child")
.addEventListener('click', () => {
  console.log("child clicked");
  
}, true) // // event capturing


document.querySelector("#grandparent")
.addEventListener('click', () => {
  console.log("Grandparent clicked");
  
}, false) 
document.querySelector("#parent")
.addEventListener('click', (e) => {
    
  console.log("parent clicked");
  e.stopPropagation() // this will help us to stop the propagation of the event
    // propagation will stop at this point of time and code also stops, it does not print Grandparent clicked 
  
}, false) 
document.querySelector("#child")
.addEventListener('click', () => {
  console.log("child clicked");
  
}, false) 

// how we can stop propagating events up the hierarchy or down and how is it useful




