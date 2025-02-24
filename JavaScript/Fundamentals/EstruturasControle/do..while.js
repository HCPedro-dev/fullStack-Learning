function getInterioAleatorio(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

do {
  opcao = getInterioAleatorio(-1, 10);
  console.log(`Opção: ${opcao}`)
} while (opcao != -1)

console.log('Fim do loop');

