// A diferença entre os dois objetos é que o primeiro utiliza a notação literal de objetos com chaves nomeadas (key-value pairs), enquanto o segundo utiliza a notação de escopo de variáveis (destructuring assignment). Ambos criam objetos com as mesmas chaves e valores, mas possuem formas diferentes de serem escritos.
const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c };

console.log(obj1, obj2);


const nomeAttr = 'nota';
const valorAttr = 7.8;

const obj3 = {}
obj3[nomeAttr] = valorAttr;
console.log(obj3);


const obj4 = {
  funcao1: function() {
    
  }
}

