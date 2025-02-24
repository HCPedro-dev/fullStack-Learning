// função anonima é uma função sem nome
const soma = function (a, b) {
  return a + b;
}

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
}

imprimirResultado(3, 2); // 5
imprimirResultado(5, 3, function (a, b) {
  return a * b;
})