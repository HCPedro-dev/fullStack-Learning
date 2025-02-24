o método percorre um array e reduz seus elementos a um único valor, acumulando os resultados a cada iteração. Ele recebe uma função callback e um valor inicial opcional.


**EXEMPLO APLICADO**
```
const numeros = [10, 20, 30, 40];

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(soma); // Saída: 100

```

**SITUAÇÃO PRÁTICA NO TRABALHO**
- Calcular o total de vendas de uma empresa
```
const vendas = [
    { produto: "Notebook", valor: 3000 },
    { produto: "Celular", valor: 2000 },
    { produto: "Tablet", valor: 1500 }
];

const totalVendas = vendas.reduce((total, venda) => total + venda.valor, 0);

console.log(`Total de vendas: R$ ${totalVendas}`); // Saída: Total de vendas: R$ 6500

```

**EXPLICAÇÃO DETALHADA**
O metodo reduce recebe dois argumentos " vendas.reduce(callback, valorInicial) "
1- uma função de callback " (total, venda) => total + venda.valor", será utilizada para cada elemento do array;
  - `total` → O **acumulador** que guarda a soma dos valores das vendas.
  - `venda` → O **elemento atual** do array `vendas`
2- O valor 0 se dá devido o  primeiro valor do acumulador ou seja a contagem se inicia me 0;


**OUTRA FORMA DE SER ESCRITO**
```
const totalVendas = vendas.reduce(function (total, venda) {
    return total + venda.valor;
}, 0);

console.log(totalVendas); // 6500

```

Anteriormente estamos utilizando arrow function
Mas podemos escrever com a função separada;

```
function somarValores(total, venda) {
    return total + venda.valor;
}

const totalVendas = vendas.reduce(somarValores, 0);
console.log(totalVendas); // 6500

```
