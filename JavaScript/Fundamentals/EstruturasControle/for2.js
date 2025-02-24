const notas = [8, 7, 9, 6, 5];

for (i in notas) {
  //console.log('Nota: ', notas[i]);
  console.log('Posição:', i, notas[i]);
}

const pessoa = {
  nome: 'Pedro',
  idade: 25,
  
}

for (atributo in pessoa) {
  //console.log('Atributo:', atributo, pessoa[atributo]);
  console.log(`${atributo}: ${pessoa[atributo]}`);
}