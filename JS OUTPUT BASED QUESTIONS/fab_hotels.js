// there is an array of objects
// const users = [
// {
// name: "vinay",
// id: 1,
// degrees: ["mtech", "b-tech"]
// },
// {
// name: "vinay68686",
// id: 2,
// degrees: ["mtech", "b-tech"]
// }
// ]

// now add one function and achieve this output 
//  [
// {
// name: "vinay"
// id: 1,
// degrees: ["mtech", "b-tech", "phd"]
// },
// {
// name: "vinay"
// id: 1,
// degrees: ["mtech", "b-tech", "phd"]
// }
// ]

// Solution below - 

const updatedUsers = users.map((user, index) => {
  return {
    ...user,
    id: 1, // force id = 1 for all
    degrees: [...user.degrees, "phd"] // add phd
  };
});

console.log(updatedUsers);