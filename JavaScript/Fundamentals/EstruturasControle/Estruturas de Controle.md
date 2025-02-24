Estruturas de controle são um conjunto de instruções condicionais são tratadas com IF...ELSE e SWITCH, já os laços são tratados com WHILE, DO...WHILE e FOR 


#IF
podemos usar o IF  caso quisermos executar um bloco de código somente se a condição for TRUE, como: 
```
let num = 1;
if (num === 1) {
 console.log('num is equal to 1')
}
```


#IF_ELSE
Se quisermos executar um bloco de código e a condição for TRUE e outro bloc somente caso a condição seja FALSE, podemos utilizar IF... ELSE, como: 
```
let num = 0 
if (num === 0){
  console.log('num is equal to 0')
} else {
  console.log('num is not equal to 1, the value of num is' + num)
}
```

**CUIDADO** 
Temos que ter cuidado em JS sobre o retorno, por ser uma linguagem fracamente tipada, quando estivermos trabalhando dentro das condicionais um tipo number 
e for comparar com um tipo string no retorno, ele pode não entender e não dar um erro e sim retornar algo não desejável. 


#SWITCH

Se a  condição que estivermos avaliando for a mesma que anterior (porem a comparação é feita com valores diferentes), podemos usar a instrução:
```
let month = 5;
switch(month) {
   case 1:
   console.log('Januray')
   break;
   case 2:
   console.log('February')
   break;
   case 3:
   console.log('March')
   break;
   default:
   console.log('Month is not Janurary, February or MArch')
}
```

##LAÇOS
Laços são usados com frequência quando trabalhamos com ARRAYS.

#WHILE 
o bloco de código de WHILE será executado enquanto a condição for verdadeira, no código abaixo temos uma variável "i" que inicia com valor 0, e queremos que o valor de "i" seja exibido enquanto "i" for menor que 10 (ou menor igual a 9), a saída deve mostrar os valor de 0 a 9.
```
let i = 0;
while(i < 10){
console.log(i)
  i++
}
```

Enquanto for true continua na repetição, sendo false deve sair do laço. 


#DO_WHILE
A diferença entre while e do..while é que o mesmo avalia a condição após ter sido executada, garante que ao menos seja executado pelo menos uma vez o código.
```
let i = 0;
do {
  console.log(i)
  i++
} while (i < 10)
```
isso causa uma estranheza no código.



#FOR
Ele exibe o valor de 'i' no console enquanto 'i' for menor que 10, 'i' inicia com valor de 0.
```
for (let i = 0; i < 10; i++) {
   console.log(i)
}
```
o For se torna interessante quando se sabe exatamente quantas vezes se deve executar a repetição. 