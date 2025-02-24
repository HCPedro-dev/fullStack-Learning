#OperadoresAritméticos 
	São operadores, binários pois dependem de dois "itens" para realizar a operação;
	 Exemplos:
```
	 const [a, b, c, d] = [1, 2, 3, 15];
	const soma2 = a + b;
	const subtracao = a - b;
	const multiplicacao = a * b;
	const divisao = a / b;
	const modulo = a % b;
	
   console.log(soma2, subtracao, multiplicacao, divisao, modulo);
```
     Como podemos ver faz uso das operações básicas matemáticas;




#OperadoresRelacionais
     São também operadores binários, pois depende de dois elementos, porem existe uma pegadinha pois existe uma forma de comparação como:
     --> 3 > 2 irá retornar verdadeiro (true), 
     Sempre seu resultado de operação devem ser verdadeiro (true) ou (false), por ser fracamente tipada, temos que ter cuidado com os tipos dos valores, como comparar uma STRING com NUMBER, neste caso a recomendação é fazer uma comparação estrita. 
```
console.log('01)', 10 == '10'); ==  Igualdade estrita

console.log('02)', 10 === '10');  === Igualdade estrita tanto a valores quanto aos tipos

console.log('03)', '3' != 3); != diferente estrita

console.log('05)', 3 < 2); <   Menor

console.log('06)', 3 > 2); >   Maior

console.log('07)', 3 <= 2); <= Menor ou igual

console.log('08)', 3 >= 2); >= Maior ou igual
```




#OperadoresLógicos
    Em operadores lógicos temos os seguintes tipos:
     -> && = AND, retornar TRUE se ambas opções são TRUE 
     -> || = OR, retorna TRUE se ao menos uma for TRUE 
     -> ! = NOT, inverte os valores entre FALSE e TRUE

-> && = AND
```
console.log(true && true);  // true
console.log(true && false); // false

let idade = 25;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

```


-> || = OR
```
console.log(true || false); // true

let temDinheiro = false;
let temCartao = true;

if (temDinheiro || temCartao) {
  console.log("Pode fazer a compra");
} else {
  console.log("Não pode comprar");
}

```


-> ! = NOT
```
console.log(!true);  // false
console.log(!false); // true

let estaChovendo = true;
if (!estaChovendo) {
  console.log("Posso sair sem guarda-chuva!");
} else {
  console.log("Melhor levar o guarda-chuva.");
}

```


-> ^ = XOR
```
let a = 5, b = 3;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a, b); // 3, 5
```

      &&  e  || são também conhecidos como operadores de curto circuito
    
     Porem temos suporte ao operadores BIT A BIT (bitwise)
     -> & =  E
     -> | = ou
     -> ~ = negação
     -> ^ = ou exclusivo(xor)
     -> << = deslocamento para esquerda
     -> >> = deslocamento para direita
 


#operadoresUnários
```
let num1 = 1;
let num2 = 2;


num1++ // incrementa num1 em 1
console.log(num1); // imprime 11

--num1 // decrementa num1 em 1
console.log(num1); // imprime 10


num2-- // decrementa num2 em 1
console.log(num2); // imprime 19


console.log(++num1 === num2--)
```


#operadoresTernários
```
const resultado = nota => 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(8)); // Aprovado  
console.log(resultado(3)); // Reprovado
```
