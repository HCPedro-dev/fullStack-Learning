const pessoa = {
  saudacao: 'Olá, mundo!',
  falar() {
    console.log(this.saudacao);
  }
}

pessoa.falar(); // Olá, mundo!
const falar = pessoa.falar;

falar(); // undefined, pois 'this' não está apontando para a pessoa

const falarDePessoa = pessoa.falar.bind(pessoa); // agora 'this' está apontando para a pessoa
falarDePessoa(); // Olá, mundo!

