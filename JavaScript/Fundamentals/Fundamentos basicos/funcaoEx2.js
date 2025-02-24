// armanezenando uma funcao em uma variavel 
const imprimirSoma = function (a, b) {
  console.log(a + b);
};
imprimirSoma(2, 3);


// arrow function
const soma = (a, b) => {
  return a + b;
};
console.log(soma(4, 5));


// arrow function simplificada
const subtracao = (a, b) => a - b;
console.log(subtracao(10, 5));

// arrow function com uma unica expressao