const quaseArray = { 0: 'Pedro', 1: 'Ana', 2: 'Daniella'};

console.log(quaseArray); // { '0': 'Pedro', '1': 'Ana', '2': 'Daniella' }
Object.defineProperty(quaseArray, 'tostring', {
  value: function () {
    return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[1]); 

const meuArray = ['Pedro', 'Ana', 'Daniella']
console.log(quaseArray.toString(), meuArray);