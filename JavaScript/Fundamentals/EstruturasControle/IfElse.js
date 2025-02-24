const imprimirResultado = function (nota) {
  if (nota >= 7) {
    console.log('Aprovado!');
  }  else {
    console.log('Reprovado!');
  }
}

imprimirResultado(8); // Aprovado!
imprimirResultado(3); // Reprovado!
imprimirResultado('test'); // Reprovado! temos que te um cuidado maior em JS pois neste caso deveria retornar um erro, mas acaba aceitando a condição e retornando 'Reprovado!'