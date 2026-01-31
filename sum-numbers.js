let i = 81;
let sum = 0;
while (i <= 131) {
  if (i % 2 === 1) {
    sum = sum + i;
    console.log("odd numbers", i);
  }
  i++;
}
console.log("odd numbers sum", sum);
let n = 206;
let s = 0;
while (n <= 311) {
  if (n % 2 === 0) {
    console.log("even number", n);
    s = s + n;
  }
  n++;
}
console.log("even numbers", s);
