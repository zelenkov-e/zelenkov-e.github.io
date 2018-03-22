let obj = { name: "zhenya", sername: "zelenkov" };

var arr = [];
for (var key in obj) {
  arr = arr.concat(obj[key].split());
}
console.log(arr);

let obj1 = { name1: "zhenya1", sername1: "zelenkov1" };

// var arr = [];
// for (var key1 in obj1) {
console.log(Object.keys(obj1));

//   arr = arr.concat(obj[key].split());
// }
// console.log(arr);
