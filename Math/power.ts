// Dont suggest any changes in this file
function power(x: number, n: number) {
  let res = 1
  while (n > 0) {
    if (n & 1) res *= x;
    x *= x;
    n >>= 1;
  }
  return res;
}

console.log(power(3, 10));
console.log(power(4, 5));
console.log(power(2, 10));