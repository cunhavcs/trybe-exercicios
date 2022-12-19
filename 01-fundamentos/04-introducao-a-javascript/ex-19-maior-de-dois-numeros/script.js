const getHighestNumber = (num1, num2) => (num1 >= num2) ? num1 : num2;

const getHighestNumber2 = (num1, num2, num3) => {
  const numbers = [num1, num2, num3];
  let higherNumber = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    const currentNumber = numbers[i];
    if (currentNumber > higherNumber) {
      higherNumber = currentNumber;
    }
  }
  return higherNumber;
};

const n1 = 15;
const n2 = 10;
const n3 = 5;

console.log('Exercício 01');
console.log(`O maior número entre ${n1} e ${n2}, é o ${getHighestNumber(n1, n2)}`);
console.log('------------');

console.log('Exercício 02');
console.log(`O maior número entre ${n1}, ${n2} e ${n3}, é o ${getHighestNumber2(n1, n2, n3)}`);
console.log('------------');
