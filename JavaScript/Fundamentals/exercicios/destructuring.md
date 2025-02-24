1. Trocando valores com destructuring
Escreva um código que troque os valores de duas variáveis utilizando destructuring.
// Dados iniciais
let a = 5;
let b = 10;

// Utilize destructuring para trocar os valores de a e b

console.log(a); // Deve imprimir 10
console.log(b); // Deve imprimir 5



2. Destructuring em objetos
Crie um objeto que representa um produto, com as propriedades nome, preco e categoria. Use destructuring para acessar essas propriedades e imprimi-las no console.

// Objeto do produto
const produto = {
  nome: "Notebook",
  preco: 3500,
  categoria: "Eletrônicos",
};

// Utilize destructuring para extrair as propriedades

// Imprima no console:
// Nome: Notebook
// Preço: 3500
// Categoria: Eletrônicos



3. Destructuring em arrays aninhados
Dado o array abaixo, use destructuring para acessar o número 3 e o número 8.

// Array aninhado
const numeros = [1, [2, 3, 4], [5, [6, 7, 8]]];

// Utilize destructuring para acessar o número 3 e o número 8

console.log(tres); // Deve imprimir 3
console.log(oito); // Deve imprimir 8