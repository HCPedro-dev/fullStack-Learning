const pai = { nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai);
filha1.nome = 'Ana';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: { value: 'Maria', writable: false, enumerable: true}
});

console.log(filha2.nome); // Maria
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1)); // ["nome"]
console.log(Object.keys(filha2)); // ["nome"]