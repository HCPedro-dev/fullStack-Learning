console.log(typeof Array, typeof new Array)

let aprovados =  new Array('a', 'b', 'c')

console.log(aprovados)

aprovados =  ['D', 'E', 'F', 'G', 'H']

console.log(aprovados[0])
console.log(aprovados[9])

aprovados.push('test')
console.log(aprovados)
console.log(aprovados.length)
aprovados.sort()
console.log(aprovados)


aprovados.splice(1, 3, 'elemento test')
console.log(aprovados)