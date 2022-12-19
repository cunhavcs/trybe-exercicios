const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const typesOfFruits = (array) => {
  const fruits = [];

  for (let i = 0; i < array.length; i += 1) {
    currentFruit = array[i];
    if (!fruits.includes(currentFruit)) {
      fruits.push(currentFruit);
    }
  }
  const fruitsSorted = fruits.sort();
  return fruitsSorted;
}

const createBasketObject = (basketArray, typesArray) => {
  const basketObject = {};

  for (let i = 0; i < typesArray.length; i += 1) {
    const currentType = typesArray[i];
    let amountOfType = 0;

    for (let i2 = 0; i2 < basketArray.length; i2 += 1) {
      const currentFruit = basketArray[i2];

      if (currentFruit === currentType) {
        amountOfType += 1;
      }
    }
    basketObject[currentType] = amountOfType;
  }
  return basketObject;
};

console.log(createBasketObject(basket, typesOfFruits(basket)));
