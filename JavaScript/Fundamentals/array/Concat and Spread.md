O método concat() é usado para juntar dois ou mais arrays, criando um novo array sem modificar os originais.

**SINTAXE**
```
novoArray = array1.concat(array2, array3, ...);

```
Os arrays serão unidos tornando um novo array, mas contendo os elementos dos arrays anteriores.

**EXEMPLO APLICADO**
```
const equipe1 = ["Pedro", "Ana"]; // array1 
const equipe2 = ["Carlos", "Mariana"]; // array2

const equipeCompleta = equipe1.concat(equipe2); // criação do novo array3

console.log(equipeCompleta); 
// Saída: ["Pedro", "Ana", "Carlos", "Mariana"] 

```

**SITUAÇÃO PRÁTICA NO TRABALHO**
- Mesclando listas de produtos de diferentes fornecedores.
```
const produtosFornecedorA = [
    { id: 1, nome: "Notebook", preco: 3000 },
    { id: 2, nome: "Mouse", preco: 150 }
];

const produtosFornecedorB = [
    { id: 3, nome: "Teclado", preco: 200 },
    { id: 4, nome: "Monitor", preco: 1200 }
];

const estoqueTotal = produtosFornecedorA.concat(produtosFornecedorB);

console.log(estoqueTotal);
/* Saída:
[
    { id: 1, nome: "Notebook", preco: 3000 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Teclado", preco: 200 },
    { id: 4, nome: "Monitor", preco: 1200 }
]
*/

```
Nota-se que o CONCAT  criou um novo array e agora com a lista de ambos os fornecedores.
