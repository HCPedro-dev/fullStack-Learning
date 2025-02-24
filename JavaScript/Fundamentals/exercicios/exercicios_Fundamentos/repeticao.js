//Elabore uma função que recebe um número como parametro e retorne uma string como símbolo "+" na quantidade especificada no parametro.

function repetirSimbolo(numeroVezes) { 
  let string = '+';
  return string.repeat(numeroVezes);
}

console.log(repetirSimbolo(2)); // '++'
console.log(repetirSimbolo(4)); // '++++'
