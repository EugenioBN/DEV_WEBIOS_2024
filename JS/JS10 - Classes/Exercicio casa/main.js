class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }

    contaPoupanca() {
        let taxa = 1.5 / 100;
        let salarioComDesconto = this.salario * (1 - taxa);
        return salarioComDesconto;
    }

    contaCorrente() {
        let taxa = 3.6 / 100;
        let salarioComDesconto = this.salario * (1 - taxa);
        return salarioComDesconto;
    }

    contaEstudante() {
        let taxa = 1.2 / 100;
        let salarioComDesconto = this.salario * (1 - taxa);
        return salarioComDesconto;
    }

    imprimirDadosComDesconto(salarioComDesconto) {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Salário inicial: R$${this.salario}`);
        console.log(`Salário com desconto: R$${salarioComDesconto}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Agência: ${this.agencia}`);
        console.log(`Conta: ${this.conta}`);
        console.log(`Número da Conta: ${this.numeroConta}`);
    }
}

let cliente1 = new ContaBancaria("Eugenio", 22, 2600, "M", "001", "Poupança", "77885-6");
let cliente2 = new ContaBancaria("Shrek", 53, 2500, "M", "002", "Corrente", "98753-1");
let cliente3 = new ContaBancaria("Gru", 62, 2000, "M", "003", "Estudante", "45263-4");

cliente1.imprimirDadosComDesconto(cliente1.contaPoupanca());

cliente2.imprimirDadosComDesconto(cliente2.contaCorrente());

cliente3.imprimirDadosComDesconto(cliente3.contaEstudante());