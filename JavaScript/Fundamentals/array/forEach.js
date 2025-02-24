const aprovados = ['pedro', 'ana', 'dani', 'raquel'];

aprovados.forEach(function(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
})

// utilizando arrow function para obter os nomes
aprovados.forEach(nome => console.log(nome));

// agora utilizando uma constante que abriga uma arrowfunction
const exibirNome = aprovado => console.log(aprovado);
aprovados.forEach(exibirNome);