class Lancamento {
  constructor(nome ='Generico', valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l)); 
  }

  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor;
    })
    return valorConsolidado;
  }
}

const salario = new Lancamento('salario', 5000);
const contaLuz = new Lancamento('luz', -500);

const contas = new CicloFinanceiro(12, 2021);
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario()); // -4500