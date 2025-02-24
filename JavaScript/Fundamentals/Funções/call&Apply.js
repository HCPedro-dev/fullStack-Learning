function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4999.90,
  desconto: 0.15,
  getPreco
}