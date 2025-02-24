let valor;
console.log(valor); // undefined

valor = null;
console.log(valor); // null

const produto = {};
console.log(produto.preco); // undefined
console.log(produto);

produto.preco = 3.5;
console.log(produto.preco);

produto.preco = undefined;
console.log(!!produto.preco);
//delete.produto.preco
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);
console.log(produto);
