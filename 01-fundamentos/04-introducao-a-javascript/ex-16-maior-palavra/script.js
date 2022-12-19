let array = ['java', 'javascript', 'python', 'html', 'css'];
const arraySize = array.length;
let biggestWord = '';
let biggestWordSize = biggestWord.length

for (let i = 0; i < arraySize; i += 1) {
  const currentWord = array[i];
  const currentWordSize = currentWord.length;
  if (currentWordSize > biggestWordSize) {
    biggestWord = currentWord;
    biggestWordSize = currentWordSize;
  }
}
console.log(`array = [${array}]`);
console.log(`Maior palavra do array: ${biggestWord}`);
