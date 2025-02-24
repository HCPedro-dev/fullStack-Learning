function pessoa() {
  this.idade = 0;


  const self = this; // Para acessar a variavel this dentro da função, é necessario guardar a referencia para ela na variavel self.
  setInterval(function() {
    self.idade++; // Aqui estamos acessando a variavel this dentro de uma função anonima, que não possui escopo global, logo não conseguimos acessar a variavel idade diretamente.
    console.log(self.idade); // Aqui estamos tentando acessar a variavel idade, que não está disponivel dentro do contexto da função.
  }.bind(this), 1000);
}

new pessoa 