// let frutas = [
//     "maça",
//     "banana",
//     "abacaxi",
//     "manga",
//     "melancia",
//     "uva",
//     "kiwi",
//     "amora",
// ]


// let infoUsuraio = [
//     ["Ana", 1234],
//     ["Bruno", 3214]
//     ["João", 5634]
// ]


// infoUsuraio.forEach((valor,[indice]) =>{
//     console.log(valor,indice);
// })
// frutas.forEach((valor, indice) => {

//     console.log([1][1]);
    
// })


// for (i = 0; i <= frutas.length ; i++){

//      console.log(i) //numero da posição
//     console.log(frutas[i]); //valor da posição
// }

// frutas.forEach(Percorrer)
// //primeiro é referente ao valor do conteudo
// //segundo parametro é referente ao indice
// function Percorrer(valor, indice){
//     console.log(valor);
//     console.log(indice);
// }




// Aula 09/2


//Math.currentyl / Math.max / max.min / math.sqrt

let numeros = [
    20, 100, 30, 40,2056,65879
]
//trazer um novo array atualizado com a raiz quadrada de cada numero do array

let numerosDois = numeros.map(Math.sqrt)
let MaiorNumero = Math.max.apply(Math, numeros)
let menorNumero = Math.min.apply(Math,numeros)


console.log(`maior` +MaiorNumero + "      " + `menor` + menorNumero)
console.log( `maior`+MaiorNumero)
console.log(numeros)
console.log(numerosDois)



// aplicando metodo filter
console.clear()


let filtrar = numeros.filter((valor) => {
    return valor>= 1000; 
})

console.log(`Array completo:  `+numeros)
console.log(`Array com filtro:  `+filtrar)


//metodo find() achar ou encontrar


console.clear()


let tarefa = [
    {
        tarefa: `Dormir`,
        isFeita: true
    },
    {
        tarefa:`Limpar`,
        isFeita: false
    },
    {
        tarefa:`torcer`,
        isFeita: true
    },
]

//retorne apenas as tarefas true utilizando find


let retornaTrue = tarefa.find((item)=>{
    return item.isFeita == true
    console.log(tarefa)    
})