Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
  return this; // retornando o array para permitir cascading
}

const aprovados = ['pedro', 'ana', 'dani', 'raquel'];

aprovados.forEach2(function(nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
})
