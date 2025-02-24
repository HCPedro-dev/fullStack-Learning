let isAtivo = false;
console.log(isAtivo); // false

isAtivo = true;
console.log(isAtivo); // true

isAtivo = 1;
console.log(!!isAtivo); 

// situações que é verdadeiro
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!! {});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

// situações que é falso

console.log(!!0);
console.log(!!null);
console.log(!!undefined);
console.log(!!false);
console.log(!!'');

// operador lógico 
console.log('operador lógico');
console.log(!!('' || null || 0 || ' '));