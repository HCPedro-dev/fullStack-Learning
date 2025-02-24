// a constante ao ser informada ela é alocada em uma posição da memória, mas dentro do array podemos alterar os seus valores, mas não a constante.
const pessoa = {nome: 'Pedro'}
// desta forma estamos alterando o valor de nome dentro do array
pessoa.nome = 'Paulo'
console.log(pessoa.nome);


// aqui estamos tentando alterar a constante pessoa, mas como é um objeto, não podemos fazer isso.
//pessoa = {nome: 'Ana'}
// neste caso irá imprimir um erro
//console.log(pessoa.nome); 

// utilizar o object.freeze deve se ter o cuidado pois não irá poder mais realizar alterações, AGORA O OBJETO SE TORNA UMA CONSTANTE SEM QUALQUER ALTERAÇÃO
Object.freeze(pessoa);

// tentativa de alterar o valor do nome, mas não gera ação por estar congelado
pessoa.nome = 'Maria';

// tentativa de atribuir um novo dado ao array
pessoa.end = 'Rua teste';

console.log(pessoa.nome); 
console.log(pessoa); // nota que quando iremos verificar o array por completo nada foi feito pois esta congelado
