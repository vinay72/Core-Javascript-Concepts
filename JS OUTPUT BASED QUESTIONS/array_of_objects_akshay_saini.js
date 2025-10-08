const users = [
    {firstName:"akshay", lastName:"saini", age:26},
    {firstName:"donald", lastName:"trump", age:75},
    {firstName:"elon", lastName:"mask", age:50},
    {firstName:"deepika", lastName:"padukone", age:26}
]
// print the full names of all users
const output= users.map((x) => x.firstName + " " + x.lastName) 
console.log(output);

// acc = {26 : 2, 75: 1, 50: 1}

const output1 = users.reduce(function (acc, curr){
  if(acc[curr.age]){
     acc[curr.age] = ++ acc[curr.age]
  }
  else {
    acc[curr.age] = 1
  }
  return acc
}, {}) // initial value would be an empty object
console.log(output1);

// filter example below

const output2 = users.filter((item) => item.age < 30).map((x) => x.firstName) // method chaining we can use map over filter as well
console.log(output2);

const userList = users.reduce((acc, curr) => {
    if(curr.age < 30) {
        acc.push(curr.firstName);
    }

    return acc;
},[]);

console.log(userList);



