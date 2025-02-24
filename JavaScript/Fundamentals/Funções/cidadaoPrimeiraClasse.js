// Função em JS é first-class citizens, ou seja, pode ser armazenada em variáveis, passada como argumento, 
// retornada como resultado, ou mesmo atribuida a uma variável.

// criar função literal
function fun1() {}


// Armazenar função em variável
const fun2 = function () {};


// Armazenar função dentro de um array
const arrayFunc = [function () {}, function () {}];
const arrayFunc2 = [function (a, b) { return a + b }, fun1, fun2];
console.log(arrayFunc2[0](2, 3)); // 5


// Armazenar função como propriedade de objeto
const obj = {
  funcao1: function () { return 'oopaa'},
  funcao2: function () {},
};
console.log(obj.funcao1()); // oopaa


// Passar função como argumento
function run(fun) {
  fun();
}
run(function () { console.log('Executando...') });


// Retornar função como resultado

function soma(a, b) {
  return function () {
    console.log(a + b + c);
  };
}

soma(2, 3)(4); // 9