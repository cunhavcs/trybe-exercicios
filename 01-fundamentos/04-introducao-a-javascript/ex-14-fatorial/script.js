const number = 10;
let factorial = number;

for (let i = (number - 1); i > 0; i -= 1) {
  factorial *= i;
}
console.log(factorial);
