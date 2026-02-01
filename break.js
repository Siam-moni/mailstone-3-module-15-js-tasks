let n = 1;
let sum = 0;
while (n <= 100) {
  sum = sum + n;
  console.log(sum);
  if (sum >= 100) {
    break;
  }

  n++;
}
