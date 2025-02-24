// Sempre seu resultado de operação devem ser verdadeiro (true) ou (false), por ser fracamente tipada, temos que ter cuidado com os tipos dos valores, como comparar uma STRING com NUMBER, neste caso a recomendação é fazer uma comparação estrita.

console.log('01)', 10 == '10'); // true, nota que '10' é um string e 10 é um número estamos utilizando somente dois iguais (==)

console.log('02)', 10 === '10'); // false, neste caso estamos utilizando três iguais e dois estrelas (===) para verificar se os valores e tipos (string ou number) são iguais

/* Operadores de comparação
   ==  Igualdade estrita
   === Igualdade estrita tanto a valores quanto aos tipos
   != diferente estrita
   <   Menor
   >   Maior
   <= Menor ou igual
   >= Maior ou igual
*/

console.log('03)', '3' != 3); 
console.log('04)', '3'!== 3); 
console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);


const d1 = new Date(0);
const d2 = new Date(0);
console.log('09)', d1 == d2); // false, dois objetos do tipo Date são diferentes
console.log('10)', d1 === d2); // false, dois objetos do tipo Date são diferentes
console.log('11)', d1.getTime() === d2.getTime()); // true, os valores dos timestamps são iguais, os objetos são iguais
console.log('12)', undefined == null); // true, undefined e null são do mesmo tipo e são iguais a eles mesmos
console.log('13)', undefined === null); // false, undefined e null são do mesmo tipo e são diferentes a eles mesmos

