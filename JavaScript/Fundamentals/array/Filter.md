O método filter cria um novo ARRAY contendo apenas os elementos que atendem a uma determinada condição. Mas ele não modifica o array existente.
```
const novoArray = array.filter((elemento, indice, array) => {
  return condição; // Retorna true para elementos que devem ser incluídos
});

```
- elemento: o item atual do array;
- indice: a posição do elemento no array (opcional);
- array: o próprio array sendo percorrido;


**EXEMPLO APLICADO**
Vamos filtrar um array de números para manter apenas os valores maiores que 50:
```
const numeros = [10, 55, 80, 30, 100];

const maioresQue50 = numeros.filter(num => num > 50);

console.log(maioresQue50); // [55, 80, 100]

```
o array original permanece inalterado. 


**SITUAÇÃO NA PRÁTICA**
FILTRANDO PEDIDOS PENDENTES EM UM SISTEMA DE E-COMMERCE
Você deve executar um comando que sua saída seja apenas os pedidos que ainda estão pendentes de entrega. 

--ARRAY DE PEDIDOS:
```
const pedidos = [
  { id: 101, cliente: "Pedro", status: "entregue" },
  { id: 102, cliente: "Ana", status: "pendente" },
  { id: 103, cliente: "Carlos", status: "entregue" },
  { id: 104, cliente: "Mariana", status: "pendente" }
];

```

--FILTRANDO APENAS OS PEDIDOS PENDENTES:
```
const pedidosPendentes = pedidos.filter(pedidos => pedisos.status === "pendentes");

console.log(pedidosPendentes)

[ 
  { id: 102, cliente: "Ana", status: "pendente" }, 
  { id: 104, cliente: "Mariana", status: "pendente" } 
]
```


**Situação prática**
- Painel de gerenciamento de pedidos, mostrando apenas os pedidos pendentes.
- Filtragem de usuários ativos/inativos em um sistema de CRM.
- Sistema de busca onde o usuário pode filtrar produtos por categoria ou faixa de preço;



**EVOLUÇÃO DO CÓDIGO ACIMA**
AGORA, ALÉM DE FILTRAR OS PEDIDOS PENDENTES VAMOS:
- Contar quantos pedidos estão pendentes;
- Ordenar os pedidos pendentes por ID (do menor para o maior);

```
const pedidos = [
  { id: 101, cliente: "Pedro", status: "entregue" },
  { id: 102, cliente: "Ana", status: "pendente" },
  { id: 103, cliente: "Carlos", status: "entregue" },
  { id: 104, cliente: "Mariana", status: "pendente" },
  { id: 105, cliente: "João", status: "pendente" }
];

// Filtra apenas os pedidos pendentes
const pedidosPendentes = pedidos.filter(pedido => pedido.status === "pendente");

// Ordena os pedidos pendentes pelo ID (do menor para o maior)
const pedidosOrdenados = pedidosPendentes.sort((a, b) => a.id - b.id);

// Conta quantos pedidos estão pendentes
const totalPendentes = pedidosOrdenados.length;

// Exibe os resultados
console.log(`Total de pedidos pendentes: ${totalPendentes}`);
console.log("Pedidos pendentes ordenados:", pedidosOrdenados);

```

SAÍDA
```
Total de pedidos pendentes: 3
Pedidos pendentes ordenados: [
  { id: 102, cliente: "Ana", status: "pendente" },
  { id: 104, cliente: "Mariana", status: "pendente" },
  { id: 105, cliente: "João", status: "pendente" }
]

```

**EXPLICAÇÃO DAS MELHORIAS**
- Filtramos os pedidos pendentes usando filter()
- Ordenamos os pedidos por ID usando sort()
- Contamos quantos pedidos existem usando .length
