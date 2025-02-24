const ferrari = {
  modelo: 'f40',
  velMAx: 350
}

const volvo = {
  modelo: 'xc90',
  velMax: 220
}

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)