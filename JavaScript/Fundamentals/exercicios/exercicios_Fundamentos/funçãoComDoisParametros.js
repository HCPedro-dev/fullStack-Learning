// desenvolva uma funçao que recebe dois parametros, um é quantidade de horas trabalhadas e o outro é o salario por hora, ao final deve retornar o salario total do funcionario, com "Salário igual a R$:"

function calcularSalario(horasTrabalhadas, salarioHora) {
  return horasTrabalhadas * salarioHora;
}

const salario = calcularSalario(150, 40.5);

console.log(`O salário igual a R$: ${salario}`);