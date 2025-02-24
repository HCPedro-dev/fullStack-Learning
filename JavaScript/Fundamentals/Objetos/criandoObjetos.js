// usando notação literal de objetos

const obj1 = {};  
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

// Funções construturas
function Produto(nome, preco, desconto) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desconto);
  }
}

const p1 = new Produto('Notebook', 4999.90, 0.15);
const p2 = new Produto('Tablet', 3999.90, 0.25);

console.log(p1.getPrecoComDesconto());
console.log(p2.getPrecoComDesconto());


// Função factory
function createPessoa(nome, idade) {
  return {
    nome,
    idade,
    falar: () => console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`)
  }
}

const pessoa1 = createPessoa('Maria', 30);

console.log(pessoa1.falar()); // Olá, meu nome é Maria e tenho 30 anos.

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha.nome); // Ana


// Um função que retorna um objeto
const fromJSON = JSON.parse('{"nome": "João", "idade": 30}');
console.log(fromJSON.nome); // João