// currying function by using bind 

let multiply = function(x, y){
    console.log(x * y);
}
let multiplyByTwo = multiply.bind(this, 2 ) // 2 would set to x
// bind method will create copy of multiply method  and we pass some arguments
multiplyByTwo(5) // 5 refers to y
// output - 10

let multiplyByThree = multiply.bind(this, 3 )
multiplyByThree(5) // output - 15
// this is what function currying is we use multiply method to create multiplyByTwo and multiplyByThree methods
