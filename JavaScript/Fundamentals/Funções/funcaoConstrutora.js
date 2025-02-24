function carro(velocidadeMaxima = 200, delta = 5) {
  let velocidadeAtual = 0; // atributo privado
  
  // metodo publico "this faz com que possamos acessar esse atributo externamente"
  this.acelerar = function () {
      if (velocidadeAtual + delta <= velocidadeMaxima) {
        velocidadeAtual += delta;
      } else {
        velocidadeAtual = velocidadeMaxima;
      }
  }
  
  // metodo publico "this faz com que possamos acessar esse atributo externamente"
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  }
}


const uno = new carro(); // instanciando um novo objeto da classe carro
uno.acelerar(); // chamando o metodo publico da classe
console.log(uno.getVelocidadeAtual()); // 10


const ferrari = new carro(300, 20); // instanciando um novo objeto da classe carro
ferrari.acelerar(); // chamando o metodo publico da classe
ferrari.acelerar(); // chamando o metodo publico da classe
ferrari.acelerar(); // chamando o metodo publico da classe
console.log(ferrari.getVelocidadeAtual()); // 60


// verificando os tipos de dados dos atributos

console.log(typeof uno.velocidadeAtual); // number
console.log(typeof uno.acelerar); // function
console.log(typeof uno.getVelocidadeAtual); // function
console.log(typeof carro); // function
console.log(typeof uno); // object


// teste
// const carro1 = new carro(300, 10);
// carro1.acelerar();
// console.log(carro1.velocidadeAtual); // 10

// const carro2 = new carro();