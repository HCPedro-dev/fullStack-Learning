const fabricantes = ["Apple", "Samsung", "Xiaomi"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

// forEach é uma função nativa do Array que executa uma função para cada elemento do array
fabricantes.forEach(imprimir);

