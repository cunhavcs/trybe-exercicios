let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('Exercício 01');
const {
  nome,
  sobrenome,
  idade,
  livrosFavoritos,
} = leitor;

console.log(`O livro favorito de ${nome} ${sobrenome} se chama "${livrosFavoritos[0].titulo}"`);
console.log('------------');

console.log('Exercício 02');
livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
);
console.log(`${nome} tem ${livrosFavoritos.length} livros favoritos`);
console.log('------------');
