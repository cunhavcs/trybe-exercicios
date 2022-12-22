// Parte 01
const body = document.getElementsByTagName('body')[0];
const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens';
body.appendChild(h1);

// Parte 02
const main = document.createElement('main');
main.classList.add('main-content');
body.appendChild(main);

// Parte 03
const centerSection = document.createElement('section');
centerSection.classList.add('center-content');
main.appendChild(centerSection);

// Parte 04
const p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit accusantium labore iure facere blanditiis maiores voluptatum eum harum beatae expedita, sed tempore temporibus dolorem neque delectus. Blanditiis commodi rerum facilis.';
centerSection.appendChild(p);

// Parte 05
const leftSection = document.createElement('section');
leftSection.classList.add('left-content');
main.appendChild(leftSection);

// Parte 06
const rightSection = document.createElement('section');
rightSection.classList.add('right-content');
main.appendChild(rightSection);

// Parte 07
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.classList.add('small-image');
leftSection.appendChild(img);

// Parte 08
const ul = document.createElement('ul');
const numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let i = 0; i < numbers.length; i += 1) {
  const li = document.createElement('li');
  li.innerText = numbers[i];
  ul.appendChild(li);
}
rightSection.appendChild(ul);

// Parte 09
for (let i = 0; i < 3; i += 1) {
  const h3 = document.createElement('h3');
  main.appendChild(h3);
}

// Parte 10
h1.classList.add('title');

// Parte 11
const h3TypeTitles = document.getElementsByTagName('h3');
for (let i = 0; i < h3TypeTitles.length; i += 1) {
  h3TypeTitles[i].classList.add('description');
}

// Parte 12
main.removeChild(leftSection);

// Parte 13
rightSection.style.marginRight = 'auto';

// Parte 14
centerSection.parentElement.style.backgroundColor = 'green';

// Parte 15
const liElements = document.getElementsByTagName('li');
for (let i = (liElements.length - 1); i > 7 ; i -= 1) {
  liElements[i].remove();
}
