// function currying using closures

let multiply = function (x){ // presetting the x
    return function(y){ // presetting the y
        console.log(x * y);
    }
}
let multiplyByTwo = multiply( 2 )
multiplyByTwo(3) // output - 6

let multiplyByThree = multiply( 3 )
multiplyByTwo(10) // output - 30