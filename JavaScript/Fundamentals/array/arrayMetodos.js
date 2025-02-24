const pilotos = ['Massa' , 'Alonso' , 'Vettel' , 'Raikkonen']
pilotos.pop() // deleta o ultimo elemento do array
console.log(pilotos)
console.log(pilotos.pop()) // mostra agora o atual ultimo elemento 

pilotos.push('Bottas') // adiciona um novo elemento ao array
console.log(pilotos)
console.log(pilotos.push()) // mostra agora a quantidade de elementos 

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)
console.log(pilotos.shift()) // mostra agora somente o primeiro elemento 

pilotos.unshift('Hamilton') // adiciona um novo elemento no inicio do array
console.log(pilotos)


pilotos.splice(0, 4, 'Vettel' , 'Massa') 
console.log(pilotos)