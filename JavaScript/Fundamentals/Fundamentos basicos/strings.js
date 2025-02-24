const escola = "testers3"

console.log(escola) // retorna o valor da varivael
console.log(escola.charAt(4)) // retorna um o valor passado dentro da string
console.log(escola.charAt(15)) // cuidado ao utilizar além dos caracteres pois pode retornar vazio e causar confusão por não ter um erro 
console.log(escola.charCodeAt(4)) // tabela ascii ou tabela unicode
console.log(escola.indexOf('3')) // retorna a posição da String solicitada
console.log(escola.substring(1)) // retona apartir do index solicitado
console.log(escola.substring(0, 3)) // retorna dentro a partir do index, porem encerra no index 3 sem informar o mesmo (0, 1, 2)
console.log('Escola '.concat(escola).concat('! primeira')) // esta é uma maneira de concatenar
console.log(`Escola ${escola}! segunda`) // esta é outra maneira e mais usual
console.log('Escola ' + escola + '! terceira') // esta é outra forma porem menos usual neste casos
console.log(escola.replace('e' , 3)) // substitui a primeira letra por outro neste caso um number 3
console.log('Ana, Maria, Pedro'.split(',')) // função split esta gerando um array dividido por virgula 