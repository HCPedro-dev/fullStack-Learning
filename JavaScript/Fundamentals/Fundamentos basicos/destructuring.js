const pessoa = {
  nome: 'Pedro',
  idade: 25,
  endereco: {
    rua: 'Rua dos Bobos',
    numero: 123,
    cidade: 'São Paulo'
  }
}

// Neste caso estamos retirando dentro da const pessoa, os valores de nome, idade e endereco.rua
const { nome, idade, endereco: { rua } } = pessoa 
console.log(nome, idade, rua) // Pedro 25 Rua dos Bobos


// Agora tambem podemos retirar e alterar o nome das varivaeis
const { nome: nomePessoa, idade: idadePessoa, endereco: { rua: ruaEndereco } } = pessoa 
console.log(nomePessoa, idadePessoa, ruaEndereco) // Pedro 25 Rua dos Bobos

// temos que ter cuidado ao utilizar este recurso quando não temos certeza do nome das variaveis que queremos utilizar, pois podemos retornar UNDEFIND caso não exista a variavel desejada
const {casa, bemHumorado = true } = pessoa // essa variavel não existe, portanto retorna undefined e true, pois foi passado um valor padrão
console.log(casa, bemHumorado) // undefined true

