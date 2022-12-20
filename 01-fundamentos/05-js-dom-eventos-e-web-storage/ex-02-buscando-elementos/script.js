// Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Aqui está o primeiroFilhoDoFilho';

const primeiroFilho = pai.firstElementChild;

const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

const textoAtencao = elementoOndeVoceEsta.nextSibling;

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

const terceiroFilho2 = pai.firstElementChild.nextElementSibling.nextElementSibling;
console.log(terceiroFilho2);
