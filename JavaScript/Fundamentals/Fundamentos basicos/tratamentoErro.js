function tratarErro(error) {
  throw new Error('Ocorreu um erro: ', error);
}

function imprimirNomeUpper(obj) {
  try {
  console.log(obj.nome.toUpperCase() + '!!!');
  } catch (error) {
    tratarErro(error);
  } finally {
    console.log('Finalizando...');
  }
}

const obj = { nome: 'Pedro' };

imprimirNomeUpper(obj); // Pedro!!! 