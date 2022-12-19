const word = 'tryber';
const wordSize = word.length;
let invertedWord = '';

for (let i = (wordSize - 1); i >= 0; i -= 1) {
  const currentLetter = word[i];
  invertedWord += currentLetter;
}

console.log(invertedWord);
