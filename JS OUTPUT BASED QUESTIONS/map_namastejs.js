// map filter and reduce are higher order functions in javascript.

// map function is used to transform an array

const arr = [5,1,2,3]

// function double(x) {
//     return x * 2
// }
// function triple(x){
//     return x * 3
// }
// function binary(x){
//     return x.toString(2)
// }

// let abc = arr.map(binary)
// console.log(abc)

// const output = arr.map(function binary(x){ // this is higher order function
//     return x.toString(2)
// })
const output = arr.map((x) => x.toString(2)) // this is perfectly valid syntax
console.log(output);

