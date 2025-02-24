// funcao sem retorno

function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(4); //evitar este caso pois gera um NAN
imprimirSoma(4, 5, 6, 8, 9); //evitar este caso pois ignora os valores extras
imprimirSoma("2", 3); //evitar este caso pois gera um NAN
imprimirSoma(); //evitar este caso pois gera um NAN

// funcao com retorno

function soma(a, b = 0) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(4)); // o segundo argumento é opcional e assume o valor 0
