// escreva uma função que receba um valor booleano ou numérico. se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso, se a entrada, for false, retornará true. Se o parâmetro for numérico, o retorno será o inverso. 

    function inversor(param) {
        if (typeof param === 'boolean') {
            return !param;
        } else if (typeof param === 'number') {
            return -param;
        } else {
            return 'booleano ou número esperados, mas o parâmetro é do tipo '+ typeof param;
        }
    }
    console.log(inversor(true)); // false
    console.log(inversor(false)); // true
    console.log(inversor(10)); // -10
    console.log(inversor(-5)); // 5
    console.log(inversor('teste')); // booleano ou número esperados, mas o parâmetro é do tipo string