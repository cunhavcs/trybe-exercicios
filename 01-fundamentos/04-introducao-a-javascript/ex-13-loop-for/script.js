let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const arraySize = numbers.length;

console.log('Exercício 01');
for (let i = 0; i < arraySize; i += 1) {
  console.log(`${i + 1}º elemento: ${numbers[i]}`);
}
console.log('------------');

console.log('Exercício 02');
let sum = 0;
for (let i = 0; i < arraySize; i += 1) {
  sum += numbers[i];
}
console.log(`Soma dos valores do elementos = ${sum}`);
console.log('------------');

console.log('Exercício 03');
const average = sum / arraySize;
console.log(`Média aritmética = ${average}`);
console.log('------------');

console.log('Exercício 04');
let messageEx4 = 'Média maior que 20';
if (average <= 20) {
  messageEx4 = 'Média menor ou igual a 20';
}
console.log(messageEx4);
console.log('------------');

console.log('Exercício 05');
let highestValue = 0;
for (let i = 0; i < arraySize; i+= 1) {
  const currentNumber = numbers[i];
  if (currentNumber > highestValue) {
    highestValue = currentNumber;
  }
}
console.log(`Maior valor do array: ${highestValue}`);
console.log('------------');

console.log('Exercício 06');
let amountOfOdd = 0;
let messageEx6 = 'Nenhum valor ímpar encontrado'
for (let i = 0; i < arraySize; i+= 1) {
  const currentNumber = numbers[i];
  if (currentNumber % 2 !== 0) {
    amountOfOdd += 1;
  }
}
if (amountOfOdd > 0) {
  messageEx6 = `Número de valores ímpares no array: ${amountOfOdd}`
}
console.log(messageEx6);
console.log('------------');

console.log('Exercício 07');
let lowerValue = numbers[0];
for (let i = 0; i < arraySize; i+= 1) {
  const currentNumber = numbers[i];
  if (currentNumber < lowerValue) {
    lowerValue = currentNumber;
  }
}
console.log(`Menor valor do array: ${lowerValue}`);
console.log('------------');

console.log('Exercício 08');
const newArray = [];
const newArraySize = 25;
for (let i = 1; i <= newArraySize; i += 1) {
  newArray.push(i);
}
console.log(newArray);
console.log('------------');

console.log('Exercício 09');
const newArray2 = [];
for (let i = 0; i < newArray.length; i += 1) {
  currentNumber = newArray[i];
  newArray2.push(currentNumber / 2);
}
console.log(newArray2);
console.log('------------');
