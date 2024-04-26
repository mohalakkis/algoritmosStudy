const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro: ', (valor1) => {
  const numImpar = (num) => {
    const rest = num % 2;
    if (rest !== 0) {
      console.log('O número é ímpar.');
    } else {
      console.log('O número é par.');
    }
  }

  numImpar(parseInt(valor1));
  
  rl.close();
});