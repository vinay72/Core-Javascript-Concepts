// reduce function is used where we want to take out all the values of an array and we need to come out with a single value of an array.

// const arr = [5,1,2,3,6]
// const output = arr.reduce((sum, item) => sum +item, 0)
// console.log(output);

const arr = [5,1,2,3,6]

function findSum(arr) {
    let sum = 0
    for (let i=0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(findSum(arr));
const output = arr.reduce(function(acc, curr) {
    acc = acc + curr
    return acc
}, 0)
console.log(output);

// write a program to find maximum value inside an array

function findMax(arr2) {
    let max = -Infinity
    for (let i=0; i < arr2.length; i++){
        if(arr2[i] > max){
            max = arr2[i]
        }
    }
    return max
}
const arr2 = [5,3,8,9,3]
console.log(findMax(arr2));

const output1 = arr.reduce(function (max, curr){
  if(curr > max){
    max = curr;
  }
  return max
}, -Infinity)
console.log(output1);



