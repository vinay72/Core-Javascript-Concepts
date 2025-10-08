function x() {
    console.log("Namaste Javascript")
}
function y(x){
    // x is callback function
    x()
}
// y is a higher order functions
// Higher order functions are functions that we passed into another functions as an arguments 
// or functions that are returned from another functions are known as Higher order functions.


// higher order functions example

// const calculateArea = function(radius){
//     const output = []
//     for(let i=0; i< radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output
// }
// const radius = [3,1,2,4]
// console.log(calculateArea(radius))

// const calculateCircumference = function (radius1){
//     const output = []
//     for(let i=0; i< radius1.length;i++){
//         output.push(2 * Math.PI * radius1[i])
//     }
//     return output
// }
// const radius1 = [3,1,2,4]
// console.log(calculateCircumference(radius1))

// const calculateDiameter = function (radius2){
//     const output = []
//     for(let i=0; i< radius2.length;i++){
//         output.push(2 * radius2[i])
//     }
//     return output
// }
// const radius2 = [3,1,2,4]
// console.log(calculateDiameter(radius2))

// this is not a good way because 99 percent of code is repeating itself so refer to below code

const radius = [3,1,2,4]

const area = function (radius){
    return Math.PI * radius * radius
}

const circumference = function (radius){
    return 2 * Math.PI * radius 
}

const diameter = function (radius){
    return 2 *  radius 
}

const calculate = function(radius, logic){
    // calculate is a higher order function
    const output = []
    for(let i=0; i< radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output
}
console.log(calculate(radius, area))
console.log(calculate(radius, circumference))
console.log(calculate(radius, diameter))

console.log(radius.map(area)) // calculate function is same as map function

// This is a perfect example of higher order
// function and area, circumference and diamter are callback functions.