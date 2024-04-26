const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um numero: ', (number) => {
  const n = parseInt(number);

  const fibonacci = [0, 1]; 

  for (let i = 2; i < n; i++) {
    const nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(nextNumber);
  }

  console.log(`Os ${n} primeiros números da sequência Fibonacci são: ${fibonacci.join(', ')}`);

  rl.close();
});

