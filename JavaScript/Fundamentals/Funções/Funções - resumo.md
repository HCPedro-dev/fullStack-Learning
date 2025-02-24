funções são muito importantes quando trabalhamos com JS, pois se torna um bloco de código reutilizável, pode ser chamado sempre que necessário. Funções ajudam a organizar, modularizar, reutilizar.

#COMPONENTES_PRINCIPAIS
1- nome da função;
2- Parametros (opcionais);
3- bloco de código;
4- retorno (opcional);

#TIPOS_DE_FUNÇÕES
1- função declarativa;
2- função anonima(expressão da função);
3- ARROW function;

#FALAR_SOBRE_THIS
se


 #INTRO
 sintaxe básica:
```
 function sayhello() {
   console.log('hello!')
 }

sayHello();
```

Também podemos passar argumentos para uma função, argumentos são variáveis das quais a função poderá fazer algo.
```
function output(text) {
  console.log(text)
}

output('Hello!')
```
Podem ser passado quantos argumentos forem necessários. 


Função também pode ser utilizada para passar um valor:
```
function soma(num1, num2) {
return num1 + num2;
}

let result = soma(1, 2)
output(result)
```


#FALAR_SOBRE_THIS
se refere ao objeto que está sendo referenciado em um determinado contexto ou escopo.
Podendo ser utilizado dentro de uma função para se referir ao objeto que chamou, ou pode ser usado fora de uma função para se referir ao objeto global.
Frequentemente é utilizado para referenciar propriedades e métodos de um objeto. This se refere ao próprio objeto informado, quando uma função é chamada a partir de um objeto que a chamou.
EXEMPLO:
```
let pessoa = {
  nome:'Pedro'
  apresentar: function() {
    console.log(Òlá, meu nome é ${this.nome}`)   
 }
}

pessoa.apresentar(); // retorna "Olá, meu nome é Pedro"
```


#FUNÇÕES_ANONIMAS
São funções que por origem não tem um nome, abaixo temos exemplos de como seguir:
```
const soma = function (a, b) {

  return a + b;

}

  

const imprimirResultado = function (a, b, operacao = soma) {

  console.log(operacao(a, b));

}

  

imprimirResultado(3, 2); // 5

imprimirResultado(5, 3, function (a, b) {

  return a * b;

})
```

#FUNÇÕES_CALLBACK




#FUNÇÕES_CONSTRUTORAS
Funções construtoras são utilizadas para criar objetos de forma mais organizada e reutilizável, funcionando como "moldes" para instanciar múltiplos objetos com as mesmas propriedades.
Vamos realizar um passo a passo;
PASSO 1:  a uma recomendação de iniciar seu nome com a letra maiúsculas;
```
function Pessoa(nome, idade) {
this.nome = nome; // define a propriedade 'nome' no objeto criado
this.idade = idade; // define a propriedade 'idade' no objeto criado
}
```



#FUNÇÃO_FACTORY
são uma maneira de criar objetos sem a necessidade de usar a palavra NEW. diferente da função construtora, vai retornar um novo objeto a cada nova chamada da função.

-- VANTAGENS 
 -> não precisa da palavra NEW, evitando assim problemas com o this.
 -> mais flexiveis, pois podem criar diferentes objetos dinamicamente.
 -> ENCAPSULAMENTO: pois podem esconder propriedades do objeto utilizando CLOSURE. 
