// crie uma função que recebe um número e retorna o nome do mês correspondente como uma string, a função deve retornar fevereiro caso o número seja 2.

function nomeDoMes(mes) {
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return meses[mes - 1];
}

console.log(nomeDoMes(2)); // fevereiro


// teste 
// console.log(nomeDoMes(12)); // Dezembro
// console.log(nomeDoMes(13)); // undefined (mes inválido)