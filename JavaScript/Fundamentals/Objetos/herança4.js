function Meuobjeto() {}
  console.log(Meuobjeto.prototype)

const obj1 = new Meuobjeto();
const obj2 = new Meuobjeto();

console.log(obj1.__proto__ === obj2.__proto__) // true, ambos apontam para o mesmo protótipo da função Meuobjeto()
console.log(Meuobjeto.prototype === obj1.__proto__)

Meuobjeto.prototype.nome = 'Pedro'
Meuobjeto.prototype.falar = function () {
  console.log(`Olá, meu nome é ${this.nome}`)
}

obj1.falar() // Olá, meu nome é Pedro

obj2.nome = 'Daniella'
obj2.falar() // Olá, meu nome é Daniella

const obj3 = {}
obj3.__proto__ = Meuobjeto.prototype
obj3.nome = 'João'
obj3.falar() // Olá, meu nome é João

 