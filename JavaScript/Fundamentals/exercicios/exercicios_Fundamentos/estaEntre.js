// crie uma função que receba quatro números como parâmetros(numero, mínimo, máximo, inclusivo) e retorne se o parâmetro numero ( o primeiro) esta entre mínimo e máximo, quando o parâmetro inclusivo for true, tenha "entre" como  inclusivo, ou seja, considerando o se o numero é igual ao mínimo ou máximo. Caso o parâmetro não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se o numero é igual a mínimo ou a máximo. 

function numeroEntre(numero, minimo = false, maximo = false, inclusivo = false) {
  if (inclusivo) {
    return numero >= minimo && numero <= maximo;
  } return numero > minimo && numero < maximo;

}

console.log(numeroEntre(10, 50, 100)); // true
console.log()