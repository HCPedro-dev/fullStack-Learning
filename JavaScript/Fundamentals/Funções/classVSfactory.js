class pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const p1 = new pessoa('João', 25);
p1.falar(); // Olá, meu nome é João e tenho 25 anos.


// utilizando arrow function e factory function

const criarPessoa = (nome, idade) => ({
  nome,
  idade,
  falar: () => console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`)
})

const p2 = criarPessoa('Maria', 30);
p2.falar(); // Olá, meu nome é Maria e tenho 30 anos.