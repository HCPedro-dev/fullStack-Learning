function soBoaNoticia(nota) {
  if(nota >= 7) {
    console.log('Aprovado com ' + nota +'!');
  }
}

soBoaNoticia(8); // Aprovado!
soBoaNoticia(4); // Nota insuficiente.


function seForVerdadeiro(valor) {
  if(valor) {
    console.log('É verdadeiro! ' + valor);
  }
}

// situações que são verdadeiras
seForVerdadeiro(true); // É verdadeiro! true
seForVerdadeiro(0); // É verdadeiro! 0
seForVerdadeiro(' '); // É verdadeiro!   (string vazia)
seForVerdadeiro([]); // É verdadeiro! [] (array vazio)
seForVerdadeiro({}); // É verdadeiro! {} (objeto vazio)
seForVerdadeiro(Infinity); // É verdadeiro! Infinity
seForVerdadeiro(NaN); // É verdadeiro! NaN
seForVerdadeiro(null); // É verdadeiro! null
seForVerdadeiro(undefined); // É verdadeiro! undefined
seForVerdadeiro(function() {}); // É verdadeiro! function () {}
seForVerdadeiro(new Date()); // É verdadeiro! Date {2023-01-10T15:44:59.639Z}
seForVerdadeiro(Symbol('teste')); // É verdadeiro! Symbol(teste)
seForVerdadeiro(10); // É verdadeiro! 10
seForVerdadeiro('teste'); // É verdadeiro! teste
seForVerdadeiro(); // É verdadeiro! undefined
