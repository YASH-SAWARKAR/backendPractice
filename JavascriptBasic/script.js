var arr = [1, 2, 3, 4, 5];

arr.forEach(function (val) {
  console.log(val + " hello");
});

var ans = arr.map(function (val) {
  return 13 + val;
});

console.log(ans);
