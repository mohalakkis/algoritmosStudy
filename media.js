// let valor1 = parseFloat(prompt('Digite o valor: '));
// let valor2 = parseFloat(prompt('Digite o valor: '));
// let valor3 = parseFloat(prompt('Digite o valor: '));

const calc = (v1,v2,v3) => {
    const sum = v1 + v2 + v3
    const media = sum / 3 
    return media;
}

// document.write(calc(valor1, valor2, valor3));

console.log(calc(5,10,5));