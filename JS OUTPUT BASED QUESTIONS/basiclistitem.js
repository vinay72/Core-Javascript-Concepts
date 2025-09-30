let list = [
  'milk',
  'bread',
  'sausage',
  'orange',
  'pineapple',
  "butter",
  "bacon"
];

function ListItem(list){
  let result = [];
  for (let index = 0; index < list.length; index++) {
    result.push(list[index]);   // collect each item
  }
  return result;
}

console.log(ListItem(list));
