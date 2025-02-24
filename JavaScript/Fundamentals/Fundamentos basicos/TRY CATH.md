O bloco `try...catch` em **JavaScript** é usado para capturar e tratar **erros** que possam ocorrer durante a execução do código, evitando que o programa quebre completamente.

```
try {
  let resultado = 10 / 0;  // Não gera erro, mas retorna Infinity
  console.log(naoExiste);  // Vai gerar um erro (variável não definida)
} catch (erro) {
  console.log("Ocorreu um erro:", erro.message);
}

```

## 🔹 **Lançando Erros com `throw`**

Podemos criar nossos próprios erros usando `throw`.
```
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida!");
  }
  return a / b;
}

try {
  console.log(dividir(10, 0)); // Isso gerará um erro
} catch (erro) {
  console.log("Erro:", erro.message);
}

```



## 🔹 **Quando Usar `try...catch`?**

✔ Para capturar erros **imprevisíveis**  
✔ Para evitar que o código **pare de funcionar**  
✔ Para tratar **requisições assíncronas** (`fetch`, `async/await`)


## 🔹 **Tratando Erros em Funções Assíncronas**

Se estiver usando `async/await`, envolva a chamada dentro de `try...catch`.
async function buscarDados() {
  try {
    let resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    let dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.log("Erro na requisição:", erro.message);
  }
}

buscarDados();
