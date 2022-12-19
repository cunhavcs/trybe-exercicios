const testScore = 59;

if (testScore >= 80) {
  console.log(`Parabéns, você faz parte do grupo das pessoas aprovadas! Sua pontuação foi: ${testScore}.`);
} else if (testScore >= 60) {
  console.log(`Você está na nossa lista de espera. Sua pontuação foi: ${testScore}`);
} else {
  console.log(`Infelizmente, você reprovou. Sua pontuação foi: ${testScore}`);
}
