const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}

funcs[5]() // mostra 5 pois a função foi criada com o valor de i como 5
funcs[6]() // mostra 6 pois a função foi criada com o valor de i como 6

// a variável i é global, portanto quando a função é chamada, ela sempre aponta para o último valor de i, que é 6. Isso é chamado de "closures"