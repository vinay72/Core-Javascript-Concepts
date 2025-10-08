// polyfill is a sort of a browser fallback, what if your browser does not have bind function so we need to write our own bind function.

let obj = {
    firstname: "vinay",
    lastname: "sharma"
}

let printName = function(hometown, state) {
    console.log(this.firstname + " " + this.lastname + " , " + hometown + " , " + state);
}
// our task is to create our own implementation of bind function

let printMyName = printName.bind(obj, "Jammu")
// every function in javascript has access to bind method
printMyName("j & k")


Function.prototype.mybind = function (...args) {
    // we are getting arguments in args array
    let obj = this
     params = args.slice(1) 
    //  will remove the first element from the list and will return the later elements
    return function (...args2){
        // we are getting other arguments in args2 array
        obj.apply(args[0], [...params, ...args2])
    }

}


let printMyName2 = printName.mybind(obj, "Jammu")
// similarly, every function in javascript has access to mybind method also
// we need to write mybind method which should exactly behaves like bind method
printMyName("j & k")