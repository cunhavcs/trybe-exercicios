// Crie um irmão para elementoOndeVoceEsta.
const outroFilho = document.createElement('section');
outroFilho.id = 'outroFilho';

const pai = document.getElementById('pai');
pai.appendChild(outroFilho);

// Crie um filho para elementoOndeVoceEsta.
const outroFilhoDoFilho = document.createElement('section');
outroFilhoDoFilho.id = 'outroFilhoDoFilho';

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.appendChild(outroFilhoDoFilho);

// Crie um filho para primeiroFilhoDoFilho.
const filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.
const terceiroFilho = filhoDoPrimeiroFilhoDoFilho
  .parentElement
  .parentElement
  .nextElementSibling;
