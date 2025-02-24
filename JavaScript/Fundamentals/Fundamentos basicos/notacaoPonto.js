// conceito de notacao PONTO = podemos acessar as propriedades de um objeto usando notacao de ponto ou notacao de colchetes, dependendo da sua necessidade do seu contexto e contexto do codigo.
// podemos acessar menbros de um objeto usando notacao de ponto

const obj1 = {}
obj1.nome = 'Pedro'

console.log(obj1.nome)


// nota que utilizando o THIS podemos acessar as propriedades de um objeto usando notacao de ponto e deixar este objeto publico. 
function Obj(nome) {
  this.nome = nome
  this.exec = function() {
    console.log('Executando...')
  }
}

const obj2 = new Obj('João')
console.log(obj1.nome)
obj2.exec()

