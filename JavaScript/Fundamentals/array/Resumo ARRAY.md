É uma estrutura de dados que armazena uma coleção de dados ordenados, podendo armazenar qualquer tipo de dado, se tornando uma estrutura HEREOGENIA, porem isso pode causar alguns problemas, pois a recomendação é que todo ARRAY deva conter o mesmo tipo de dados, sendo assim, uma estrutura HOMOGENIA.

Com array podemos utilizar alguns métodos como:
**ADICIONAR E REMOVER ELEMENTOS** 
```
let lista = [1, 2, 3];

// Adiciona no final
lista.push(4); // [1, 2, 3, 4]

// Remove do final
lista.pop(); // [1, 2, 3]

// Adiciona no início
lista.unshift(0); // [0, 1, 2, 3]

// Remove do início
lista.shift(); // [1, 2, 3]

```

**ACESSAR ELEMENTOS**
```
let cores = ['vermelho', 'azul', 'verde'];
console.log(cores[0]); // vermelho
console.log(cores.length); // 3

```

**PERCORRER ARRAY**
```
let numeros = [10, 20, 30];

// Usando forEach
numeros.forEach(num => console.log(num));

// Usando for...of
for (let num of numeros) {
    console.log(num);
}

```

**MANIPULAÇÃO E TRANSFORMAÇÃO**
```
let numeros = [1, 2, 3, 4, 5];

// Criar novo array transformado
let dobrados = numeros.map(num => num * 2); // [2, 4, 6, 8, 10]

// Filtrar valores
let maioresQue2 = numeros.filter(num => num > 2); // [3, 4, 5]

// Encontrar um elemento
let primeiroMaiorQue2 = numeros.find(num => num > 2); // 3

// Verificar se algum/todos elementos passam no teste
let temMaiorQue3 = numeros.some(num => num > 3); // true
let todosSaoPositivos = numeros.every(num => num > 0); // true

```

**REMOVENDO E SUBSTITUINDO ELEMENTOS COM SPLICE**
```
let lista = [10, 20, 30, 40];

// Remove elementos
lista.splice(1, 2); // Remove 2 elementos a partir do índice 1 -> [10, 40]

// Substitui elementos
lista.splice(1, 1, 50); // Substitui o elemento no índice 1 por 50 -> [10, 50]

```

**OUTRAS OPERAÇÕES**
```
let nums = [1, 2, 3, 4, 5];

// Reduzindo a um único valor
let soma = nums.reduce((acumulador, num) => acumulador + num, 0); // 15

// Concatenando arrays
let maisNumeros = nums.concat([6, 7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]

// Juntando elementos em uma string
let frase = ['Olá', 'mundo'].join(' '); // "Olá mundo"

// Revertendo a ordem
nums.reverse(); // [5, 4, 3, 2, 1]

// Ordenando (cuidado com números!)
let desordenado = [10, 5, 40, 25];
desordenado.sort((a, b) => a - b); // [5, 10, 25, 40]

```

DICA
**ARRAYS vs OBJETOS**
- Use colchetes como marcadores para ARRAYS;
- Use chaves como marcadores para OBJETOS;
```
let aluno = { nome: "Pedro", idade: 22 }; // Objeto
let notas = [8, 9, 10]; // Array

```