class Aluno {
    constructor(nome, ano, altura, isCracha, isCamisa, cor){
        this.nome = nome;
        this.ano = ano;
        this.altura = altura;
        this.isCracha = isCracha;
        this.isCamisa = isCamisa;
        this.cor = cor;
    }

    retornaIdade(){
        
    }
}

// Instancia == copias
let aluno1 = new Aluno("Eugenio", 2002, 1.80, true, true, "Armadura de diamante");

let aluno2 = new Aluno("Shrek", 1971, 2.30, false, false, "Green");

console.log(aluno1)

console.log(aluno2)

