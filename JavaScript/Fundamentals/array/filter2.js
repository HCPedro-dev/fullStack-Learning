Array.prototype.filter2 = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) newArray.push(this[i]);
  }
}


const produtos = [
  { id: 1, nome: 'Caneta', preco: 1.99, fragil: true },
  { id: 2, nome: 'Lápis', preco: 0.99, fragil: true },
  { id: 3, nome: 'Borracha', preco: 10, fragil: false },
  { id: 4, nome: 'Lapisera', preco: 15, fragil: true } 
]

console.log(produtos.filter(function(p) {
  return false;
}))

const caro = produtos => produtos.preco >= 11
const fragil = produtos => produtos.fragil


console.log(produtos.filter(caro).filter(fragil))