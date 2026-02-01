// let i = 1;
// while (i <= 40) {
//   i++;
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

for (let num = 55; num <= 85; num++) {
  if (num % 5 === 0) {
    continue;
  }
  if (num % 2 === 1) {
    console.log(num);
  }
}
