// desenvolva uma função que recebe dois números interios não negativos(maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de multiplicação

function multiplicacao(a, b) {
  let resultado = 0;

  for (let i = 0; i < b; i++) {
    resultado += a;
  }

  return resultado;
}

console.log(multiplicacao(5, 5)); // 15

console.log(multiplicacao(0, 7)); // 0