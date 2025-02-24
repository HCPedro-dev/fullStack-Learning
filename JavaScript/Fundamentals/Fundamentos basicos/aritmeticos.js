const [a, b, c, d] = [1, 2, 3, 15];

// sintaxe infix
const soma = a + b + c + d;
console.log(soma); // 25

// sintaxe prefix
const somaPrefix = +a + +b + +c + +d;
console.log(soma); // 25
console.log(somaPrefix); // 25

// sintaxe postfix
let numero = 10;
console.log(numero++); // imprime 10 e depois incrementa o valor de numero
console.log(numero); // 11
console.log(++numero); // incrementa o valor de numero e depois imprime o novo valor
console.log(numero); // 12


// OPERADORES ARITMÉTICOS = são usados para realizar operações matemáticas e operadores binários
const soma2 = a + b; // 3
const subtracao = a - b; // -1
const multiplicacao = a * b; // 6
const divisao = a / b; // 0.3333333333333333
const modulo = a % b; // 1

console.log(soma2, subtracao, multiplicacao, divisao, modulo);