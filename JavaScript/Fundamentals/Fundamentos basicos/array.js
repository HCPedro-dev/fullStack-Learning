const valores = [1, 2, 3, 4, 5]
console.log(valores[0], valores[3])

//por arrays em JS não ser de um tamanho fixo, quando tentamos acessar um indice que não existe ele retorna undefined
console.log(valores[5]) // indicativo que sua lógica não vai funcionar corretamente
// em java ou outtras linguagens que possuem tipagem estática, você teria um erro de compilação
console.log(valores.length) // mostra o numero de elementos do array

valores.push(6) // adiciona um novo elemento ao array
console.log(valores)

valores.pop(2) // remove o ultimo elemento do array
 console.log(valores)

delete valores[1] // remove um elemento do array

console.log(valores)
console.log(typeof valores) // mostra o tipo do array