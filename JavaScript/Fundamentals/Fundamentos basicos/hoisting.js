console.log("a =", a); // a não está definida no escopo global, logo retorna undefined
var a = 2;
console.log("a =", a);
// neste cenário acima a variável a é declarada novamente no escopo global ela é elevada para o escopo global

let b = 3;
console.log("b =", b);

function teste() {
  let b = 7;
  console.log("b =", b);
}

teste();


