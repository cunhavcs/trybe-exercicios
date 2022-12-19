const salarioBruto = 3000;

// CALCULO DO INSS
let descontoINSS = salarioBruto * 0.08;

if (salarioBruto > 1556.94 && salarioBruto < 2594.93) {
  descontoINSS = salarioBruto * 0.09;
} else if (salarioBruto < 5189.83) {
  descontoINSS = salarioBruto * 0.11;
} else {
  descontoINSS = 570.88;
}

// CALCULO DO IR
const baseCalculoIR = salarioBruto - descontoINSS;
let descontoIR = 0;

if (baseCalculoIR > 1903.98 && baseCalculoIR < 2826.66) {
  descontoIR = baseCalculoIR * 0.075 - 142.80;
} else if (baseCalculoIR < 3751.06) {
  descontoIR = baseCalculoIR * 0.15 - 354.80;
} else if (baseCalculoIR < 4664.69) {
  descontoIR = baseCalculoIR * 0.225 - 636.13;
} else {
  descontoIR = baseCalculoIR * 0.275 - 869.36;
}

// CALCULO DO SALARIO LIQUIDO
const salarioLiquido = salarioBruto - descontoINSS - descontoIR;

console.log(salarioLiquido);
