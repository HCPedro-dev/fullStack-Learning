// Crie uma função que retorna a string "Olá," concatenda com um argumento text ( a ser passado para a função) e com ponto de exclamação "!" no final.
/* exemplo:
 cumprimentar("Leonardo") // retornará "Olá, Leonardo!
 cumprimentar("Maria") // retornará "Olá, Maria!"
*/
function cumprimentar(nome) {
  return `Olá, ${nome}!`
}

console.log(cumprimentar("Leonardo")) // retornará "Olá, Leonardo!"
console.log(cumprimentar("Maria")) // retornará "Olá, Maria!"


function  idadeEmDias(anos) {
  return anos * 365 
}

console.log(idadeEmDias(25)) // retornará 8765 dias