// expressão de função imediatamente invocada 
// (IIFE - Immediately Invoked Function Expression)

(function () {
  // Declarando variáveis
  const express = require('express');
  const app = express();
  const port = 3000;

  // Definindo rotas
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  // Iniciando o servidor
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
})();