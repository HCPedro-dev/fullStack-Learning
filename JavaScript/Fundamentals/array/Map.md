Cria um novo array a partir do array atual, sendo assim não alterando o array de referencia, tornando-se útil para operações imutáveis. 

**Sintaxe**
```
const novoArray = array.map((elemento, indice, array) => {
  // Retorna um novo valor transformado
});

```

**Exemplo aplicado**
```
const numeros = [2, 4, 6, 8];

const dobrados = numeros.map(num => num * 2);

console.log(dobrados); // [4, 8, 12, 16]

```
-- O array original continua o mesmo mas o MAP gera um novo array com os elementos dobrados.


**Situação de uso Prático**
-- 
Formatando uma lista de valores para exibir em tela no formato R$.
Você trabalha em um e-commerce e precisa exibir os preços dos itens no formado de moeda R$ para os clientes.

ARRAY PRODUTOS
```
const produtos = [
  { nome: "Notebook", preco: 2500 },
  { nome: "Mouse", preco: 150 },
  { nome: "Teclado", preco: 300 }
];

```
- Agora vamos forma transforma para exemplo: R$2.500,00
```
const produtosFormatados = produtos.map(produto => {
  return {
    nome: produto.nome,
    precoFormatado: `R$ ${produto.preco.toFixed(2).replace(".", ",")}`
  };
});

console.log(produtosFormatados);

```
- SAÍDA
```
[
  { nome: "Notebook", precoFormatado: "R$ 2500,00" },
  { nome: "Mouse", precoFormatado: "R$ 150,00" },
  { nome: "Teclado", precoFormatado: "R$ 300,00" }
]

```
- Criamos uma nova variável para abrigar o método map e gerar o novo array;
- Trouxemos do array de produtos o nome do item;
- Criamos uma nova variável "precoFormatado" com o formado desejado;
- 