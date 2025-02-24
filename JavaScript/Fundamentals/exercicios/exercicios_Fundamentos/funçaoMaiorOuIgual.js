//crie uma função que receba dois numeros e retorne se o primeiro é maior ou igual ao segundo

function maiorOuIgual(a, b) {
  if(a > b || a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(maiorOuIgual(10, "4")); // false

// console.log(maiorOuIgual(5, 3)); // true

// console.log(maiorOuIgual(2, 5)); // false

// console.log(maiorOuIgual(3, 3)); // true

// console.log(maiorOuIgual(0, -1)); // true

// console.log(maiorOuIgual(-1, 0)); // false
