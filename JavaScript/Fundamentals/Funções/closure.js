// Closure é o escopo criado qunado uma função é declarada.
// Esse escopo permite a função acessar e manipular variáveis do escopo externo.

const x = 'Global';


function fora() {
  const x = 'Local';
  function dentro() {
    console.log(x); // Local
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao()); // Local