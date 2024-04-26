const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma palavra Palíndromo: ', (palavra) => {
  const palavraPalindromo = (palavra) => {
    const static = palavra.toLowerCase();
    const revert = static.split('').reverse().join('')


    if (static != revert) {
        return console.log(static, "não é Palíndromo");

    }else{
        return console.log(static, 'é Palíndromo'); 
    }
  }

  palavraPalindromo(palavra);
  
  rl.close();
});