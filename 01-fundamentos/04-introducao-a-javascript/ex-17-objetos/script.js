const player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};

console.log('Exercício 01');
console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);
console.log('------------');

console.log('Exercício 02');
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(`Nova propriedade adicionada ao objeto. bestInTheWorld: [${player.bestInTheWorld}]`);
console.log('------------');

console.log('Exercício 03');
console.log(`A jogadora Marta Silva foi eleita a melhor do mundo por ${player['bestInTheWorld'].length} vezes`);
console.log('------------');

console.log('Exercício 04');
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`);
console.log('------------');
