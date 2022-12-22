const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// Exercício 01
const addTechClass = ({ target }) => {
  const techLi = document.querySelector('.tech');
  techLi.classList.remove('tech');
  target.classList.add('tech');
  input.value = '';
};

firstLi.addEventListener('click', addTechClass);
secondLi.addEventListener('click', addTechClass);
thirdLi.addEventListener('click', addTechClass);

// Exercício 02
const changeText = () => {
  const techLi = document.querySelector('.tech');
  techLi.innerText = input.value;
};

input.addEventListener('input', changeText);

// Exercício 03
const redirectPage = () => {
  window.location.replace('https://www.linkedin.com/in/cunhavcs/');
};

myWebpage.addEventListener('dblclick', redirectPage);

// Exercício 04
const mouseOver = () => {
  myWebpage.style.color = 'green';
};

const mouseOut = () => {
  myWebpage.style.color = 'white';
};

myWebpage.addEventListener('mouseover', mouseOver);
myWebpage.addEventListener('mouseout', mouseOut);
