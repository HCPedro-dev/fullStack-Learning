// Procedural
processamento(valor1, valor2, valor3);

// Orientado a Objetos
// foco passa a ser a função do objeto
const objeto = {
  valor1,
  valor2,
  valor3,
  processamento() {
    return this.valor1 + this.valor2 + this.valor3;
  }
};

/* Principios IMPORTANTES
1- Abstração
2- Encapsulamento
3- Herança (protótipos)
4- Polimorfismo (métodos com nomes iguais)
*/