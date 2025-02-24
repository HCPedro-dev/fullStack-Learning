**Paradigma procedural** 
é um estilo baseado na decomposição de um programa em procedimentos ou funções
seguindo uma abordagem estruturada. 

==Principais características:==
-> Uso de funções/procedimentos: Blocos de código reutilizáveis que realizam tarefas específicas.
-> Sequencialidade: As instruções são executadas na ordem em que aparecem.
-> Uso de variáveis globais e locais: Para armazenar e manipular dados.
-> Estruturas de controle de fluxo: Como loops (for, while) e condicionais (if, switch).
-> Baixo encapsulamento: Dados e funções não são agrupados como em POO.

==--- VANTAGENS ---==
-> simplicidade e facilidade de entender para problemas menores;
-> boa eficiência para operações sequenciais;
-> Estrutura bem organizada;

==--- DESVANTAGENS ---==
-> dificuldade na manutenção conforme o código cresce;
-> Alto acoplamento entre funções e dados;
-> Pouca reutilização do código em projetos grandes;


**Paradigma Orientação a Objetos**
==Princípios IMPORTANTES==
1- Abstração
2- Encapsulamento
3- Herança (protótipos)
4- Polimorfismo (métodos com nomes iguais)


**Objetivos_Constantes**
A constante ao ser informada ela é alocada em uma posição da memória, mas dentro do array podemos alterar os seus valores, mas não a constante.
![[Pasted image 20250214105108.png]]

Mas podemos criar já um objeto constante sem poder realizar qualquer tipo de alteração 
fazendo uso do OBJECT.FREEZE
```
const pessoaConstante = Objecti.freeze({nome: 'Pedro'})
pessoaConstante.nome = 'Ana'
console.log(pessoaConstante)
```
Neste caso acima não iremos pode realizar nenhuma alteração no objetivo ou dentro do array pois o objeto foi criado de forma constante.

**Herança**
Em JS os objetos herdam propriedades e objetos, através de protótipos, cada objeto interno tem uma referência chamada PROTOTYPE, que aponta para outro objeto chamado OBJECT.PROTOTYPE.

1- herança entre funções construtoras, pode ser utilizado o OBJECT.CREATE; 
2- podemos utilizar classes um sintaxe mais clara para utilizar a herança;

devida JS não suportar herança multipla pode ser utilizado o MIXINS, são funções que adicionam propriedades ao objeto. 
