const notas = [8, 7, 9, 6, 5];

// sem callback
let notasBaixas = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}

console.log(notasBaixas);

// com callback

const notasBaixasComCallback = notas.filter(function(nota) {
  return nota >= 7;
});

console.log(notasBaixasComCallback);