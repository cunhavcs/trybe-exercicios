const result = 'reprovada'; // Opções de entrada: 'aprovada', 'lista' ou 'reprovada'
let message = '';

switch (result) {
  case 'aprovada':
    message = 'Parabéns, você foi aprovada(o)!';
    break;
  case 'lista':
    message = 'Você está na nossa lista de espera';
    break;
  case 'reprovada':
    message = 'Você foi reprovada(o)';
    break;
  default:
    message = 'Informação incorreta';
}

console.log(message);
