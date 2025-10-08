let zbc = {
    firstname:"vinay",
    lastname:"sharma",
    
}
let printFullName = function(hometown, state){
        console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
        
    }
printFullName.call(zbc, "Jammu", "J & K") // first parameter will always be a reference to the this variable and later arguments can be the arguments to the function
let zbc2 = {
    firstname:"vikrant",
    lastname:"bandral",
    
}
// using call method, we can do function borrowing, we can borrow functions from other objects
// and use it with data of another objects
printFullName.call(zbc2, "Jammu", "J & K")


// in call method we pass arguments individually comma separated
// the only difference between call and apply method is way how we pass arguments in a array list in case of apply method.

printFullName.apply(zbc2, ["Jammu", "J & K"])

// bind method
let printMyName = printFullName.bind(zbc2, "Jammu", "J & K")
// it will create a copy of printFullName function and it will bind printFullName to zbc2 object and will return a function which will be called later
console.log(printMyName);
printMyName()
