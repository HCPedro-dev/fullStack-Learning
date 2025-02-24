String.prototype.reverse = function () {
  return this.split('').reverse().join('');
}

console.log('teste de reverso'.reverse());