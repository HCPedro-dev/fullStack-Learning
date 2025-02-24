const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log('A');
      break;
    case 8:
    case 7:
      console.log('B');
      break;
    case 6:
    case 5:
      console.log('C');
      break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
      console.log('D');
      break;
    default:
      console.log('Nota inválida!');
  }
}

imprimirResultado(8.5) // imprime 'B'
imprimirResultado(2.5) // imprime 'D'
imprimirResultado(11) // lança uma exceção com a mensagem 'Nota inválida!'
imprimirResultado(-1) // lança uma exceção com a mensagem 'Nota inválida!'