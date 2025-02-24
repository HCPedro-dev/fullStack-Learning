const pessoa = {
  nome: 'Pedro',
  idade: 25,
  peso: 15
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`);
})


// neste caso estamos atribuindo um novo valor ao objeto mas utilizando para WRITABLE e passando o valor o mesmo nao pode ser alterado assim como é feito no OBJECT.FREEZE
Object.defineProperty(pessoa, 'dataNascimeto', {
  enumerable:true,
  writable: false,
  value: '01/01/2015'
})

pessoa.dataNascimeto = '01/01/2011'
console.log(pessoa.dataNascimeto)