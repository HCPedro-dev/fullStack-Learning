console.log(typeof Object) // mostra o tipo do objeto
console.log(typeof new Object()) // mostra o tipo do novo objeto

const cliente = function() {
}

console.log(typeof cliente) // mostra o tipo da função
console.log(typeof new cliente()) // mostra o tipo do novo objeto criado a partir da função

class Produto {}
console.log(typeof Produto) // mostra o tipo da função construtora
console.log(typeof new Produto()) // mostra o tipo do novo objeto criado a partir da função construtora

// em js classes são funções construtoras, podem ser chamadas com new para retornar um novo objeto