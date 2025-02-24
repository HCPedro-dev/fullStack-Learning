**Processamento de pedidos em um E-commerce**
Imagine que você trabalha em um e-commerce e precisa calcular o total das vendas do dia. Os pedidos estão armazenados em um array de objetos, e queremos exibir o valor total no console.

**Cenário**
--
- Cada pedido contém um ID, o nome do cliente e o valor da compra;
- Precisamos percorrer todos os pedidos e somar os valores para obter o total das vendas;

```
const pedidos = [
  { id: 101, cliente: "Pedro", valor: 150.50 },
  { id: 102, cliente: "Ana", valor: 320.00 },
  { id: 103, cliente: "Carlos", valor: 89.90 },
  { id: 104, cliente: "Mariana", valor: 250.00 }
];

let totalVendas = 0;

pedidos.forEach(pedido => {
  totalVendas += pedido.valor;
});

console.log(`Total de vendas do dia: R$ ${totalVendas.toFixed(2)}`);

```

- Criamos um array `pedidos` com objetos representando compras feitas pelos clientes;
- Definimos a variável `totalVendas` como `0` para armazenar a soma dos valores;
- Utilizamos `forEach` para percorrer cada pedido e somar seu valor à variável `totalVendas`;
- Ao final, exibimos o total formatado no console;