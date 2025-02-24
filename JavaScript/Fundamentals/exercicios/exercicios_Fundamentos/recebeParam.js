// escreva uma função que receba dois parametros. o primeiro parametro é o elemento que repetirá, enquanto o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetirElemento(elemento, numeroVezes) {
  let array = [];
  for (let i = 0; i < numeroVezes; i++) {
    array.push(elemento);
  }
  return array;
}

console.log(repetirElemento('a', 5)); // ['a', 'a', 'a', 'a', 'a']