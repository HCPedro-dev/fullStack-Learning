é um método de alta ordem para percorrer um array utilizando callback mas sem precisar utilizar o o loop for. 
Mas não retorna um novo array e também não pode ser interrompido com o BREAK.

**Exemplo aplicado**
imagine que temos uma lista de produtos e queremos exibir de forma, formatada no console.
```
const produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];

produtos.forEach((produto, indice) => {
  console.log(`${indice + 1}. ${produto}`);
});


1. Notebook
2. Mouse
3. Teclado
4. Monitor

```
Acima temos o FOREACH percorrendo cada produto e exibindo no console com seu determinado indice no array e sem gerar um novo arra.


**Situação para uso prático**
Imagine que temos uma lista de tarefas e queremos exibir ela em tela dinamicamente em HTML.
```
<ul id="lista-tarefas"></ul>

```
JS
```
const tarefas = ["Estudar JavaScript", "Fazer exercícios", "Assistir aula"];
const lista = document.getElementById("lista-tarefas");

tarefas.forEach(tarefa => {
  const item = document.createElement("li");
  item.textContent = tarefa;
  lista.appendChild(item);
});

```
- Pegamos o elemento `<ul>` do DOM;
- Percorremos o array `tarefas` e, para cada item, criamos um `<li>`;
- Adicionamos o texto da tarefa e inserimos o `<li>` dentro da `<ul>`;
- **Resultado:** Uma lista de tarefas aparece na página automaticamente;

**QUANDO USAR ?**
- Quando queremos executar uma função para cada item do array sem criar um novo;
- Para atualizar elementos do DOM de forma dinâmica (para cada item inserido na lista será executado uma função FOREACH para atualizar o array);
