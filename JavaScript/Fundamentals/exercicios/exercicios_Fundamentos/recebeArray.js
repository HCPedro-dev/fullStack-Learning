// Crie uma função que receba uma array e retorne o primeiro e o ultimo elemento desse array como um novo array


function primeiroEUltimoElemento(array) {
  return [array[0], array[array.length - 1]];
};

console.log(primeiroEUltimoElemento([7, 14, "olá"])); 

console.log(primeiroEUltimoElemento([-100, "aplicativo", 16]));