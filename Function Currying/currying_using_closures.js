// function currying using closures

Currying in JavaScript is a functional programming technique that
transforms a function taking multiple arguments into a sequence of functions,each taking a single argument.
This process creates a chain of functions that accumulate arguments until all necessary parameters are provided,
at which point the final function executes and returns a result. 

let multiply = function (x){ // presetting the x
    return function(y){ // presetting the y
        console.log(x * y);
    }
}
let multiplyByTwo = multiply( 2 )
multiplyByTwo(3) // output - 6

let multiplyByThree = multiply( 3 )
multiplyByTwo(10) // output - 30
