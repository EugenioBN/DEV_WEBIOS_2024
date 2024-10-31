// Array de objetos
let aluno = {
    nome: 'Eugenio',
    idade: 22,
    altura: 1.80,
    isCracha: true,
    isCamisa: false,
    isPaciencia: true,
    isChora: true,
    cor: 'Bege',
    notas: [10, 8, 9, 7, 8.5]
    //       0, 1, 2, 3, 4
}

// Retornar o objeto
console.log(aluno)

// Retorna apenas o nome
console.log(`O nome ${aluno.nome}`)

// Retorna apenas o campo isChora
console.log(`O aluno${aluno.isChora}chora`)

console.log(`A nota do aluno é ${aluno.notas[4]}`)

console.clear()

let IOS = [{

    nome: 'Julia',
    idade: 21,
    altura: 1.50,
    isCracha: false,
    isCamisa: true,
    isPaciencia: true,
    isChora: true,
    cor: 'Lilas',
    notas: [1, 9, 7, 6, 7.3]

},

{
    nome: 'Matheus',
    idade: 20,
    altura: 1.85,
    isCracha: false,
    isCamisa: false,
    isPaciencia: false,
    isChora: true,
    cor: 'Preto',
    notas: [4, 5, 3, 2, 0.9]
}]

// Mostrar obj por completo
console.log(IOS)

// Obj Julia - Retorna um único objeto
console.log(IOS[1])

// Retornar apenas a variavel isCamisa do obj Julia
console.log(IOS[1].isCamisa, IOS[1].isCracha, IOS[2], isPaciencia)

for(i = 0; i < IOS.length; i++){
    let login = IOS[i]
    if(login.isCracha = true){
        console.log("O aluno tem cracha")
    }
    else{
        console.log("Aluno não tem cracha")
    }
}
