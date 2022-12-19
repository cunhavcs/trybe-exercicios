const angulo1 = 44;
const angulo2 = 45;
const angulo3 = 90;
const somaAngulos = angulo1 + angulo2 + angulo3;
let eTriangulo = false;

// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus
if (somaAngulos === 180) {
  eTriangulo = true;
}

console.log(eTriangulo);
