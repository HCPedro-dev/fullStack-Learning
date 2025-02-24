// par nome;valor 
const saudacao = 'Olá, mundo!'; // contexto léxico 1 = tem haver com o local que foi definido sua variável que local, chave ou valor, neste caso foi definido no constesto global;

function exec(){
  const saudacao = 'Olá, seja bem-vindo!'; // contexto léxico 2 = tem haver com o local que foi definido sua função que local, chave ou valor, neste caso foi definido dentro da função;
  return saudacao;
}

// objetos sao grupos de pares nome/valor aninhados 
const pessoa = {
  nome: 'Teste',
  idade: 30,
  endereco: {
    rua: 'Rua Teste',
    numero: 1000
  }
}

console.log(saudacao); // Olá, mundo!
console.log(exec()); // Olá, seja bem-vindo!
console.log(pessoa); // { nome: 'Teste', idade: 30, endereco: { rua: 'Rua Teste', numero: 100