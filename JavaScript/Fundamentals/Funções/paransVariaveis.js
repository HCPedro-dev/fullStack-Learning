function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i];
  }
  return soma;
}

console.log(soma(1, 2, 3, 4, 5)); // 15
console.log(soma(1, 2, '3', 4, 5)); // 15 (ignora o valor string e soma os numeros)
console.log(soma(1, 2, NaN, 4, 5)); // 15 (ignora o valor NaN e soma os numeros)