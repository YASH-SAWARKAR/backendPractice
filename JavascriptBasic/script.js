var arr = [1, 2, 3, 4, 5];

arr.forEach(function (val) {
  console.log(val + " hello");
});

var ans = arr.map(function (val) {
  return 13 + val;
});
console.log(ans);

const ans2 = arr.filter(function (val) {
  if (val > 2) return true;
  else return false;
});
console.log(ans2);

var ans3 = arr.find(function (val) {
  if (val == 3) return val;
});
console.log(ans3);

const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(obj.name);
console.log(obj.age);
console.log(obj.city);
