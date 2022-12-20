// 01 - Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const body = document.getElementsByTagName('body')[0];
const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens';
body.appendChild(h1);

// 02 - Adicione a tag main com a classe main-content como filho da tag body;
const main = document.createElement('main');
main.classList.add('main-content');
body.appendChild(main);

// 03 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const centerSection = document.createElement('section');
centerSection.classList.add('center-content');
main.appendChild(centerSection);

// 04 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit accusantium labore iure facere blanditiis maiores voluptatum eum harum beatae expedita, sed tempore temporibus dolorem neque delectus. Blanditiis commodi rerum facilis.';
centerSection.appendChild(p);

// 05 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const leftSection = document.createElement('section');
leftSection.classList.add('left-content');
main.appendChild(leftSection);

// 06 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const rightSection = document.createElement('section');
rightSection.classList.add('right-content');
main.appendChild(rightSection);

// 07 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
// Após criar as tags anteriores, você mostrou para a sua liderança como estava a estrutura inicial da página. Sua liderança então pediu para que você fizesse algumas alterações:

// Adicione a classe title na tag h1 criada;
// Adicione a classe description nas 3 tags h3 criadas;
// Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
// Centralize a section criada no passo 6 (aquele que possui a classe right-content).
// De olho na dica 👀:: Para centralizar a section, basta configurar o margin-right: auto da section;

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.