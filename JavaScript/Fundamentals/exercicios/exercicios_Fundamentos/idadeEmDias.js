// Escreva uma  função que receba idade de uma pessoa e retorne a idade em dias, desconsiderando anos bixestos e dias desde ultimo aniverio.

function  idadeEmDias(anos) {
  return anos * 365 
}

console.log(idadeEmDias(25)) // retornará 8765 dias
console.log(idadeEmDias(70)) // retornará 10950 dias