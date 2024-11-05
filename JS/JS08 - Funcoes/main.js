// variavveis >>> var nome;
// funções >>> function NomeAluno(){}

// Funções
function Contador(){
    // criar uma verificação se o número digitado é par ou impar
    let imparPar = 9;
    let numero = 1;

    // se for impar então vamos apresentar na tela todos os números ímpares de 1 até 50
    if(imparPar % 2 == 1){
        console.log("Esse número é impar")
        for (numero; numero <= 50; numero++){
            if(numero % 2 === 1){
                console.log(numero)
            }
        }
    }

    else if(imparPar % 2 == 0){
    // Se não (se for par) vamos apresentar na tela todos os números pares de 1 até 50
    console.log("Esse número é par")
    for (numero; numero <= 50; numero++){
            if(numero % 2 === 0){
                console.log(numero)
            }
        }
    }
}

// OBS: Funções são sempre chamadas acompanhadas com parenteses
console.log(Contador())

console.clear()

// Arrow Function

let BoasVindas = () => {
    return "Welcome Pantero"
}

console.log(BoasVindas())

// Os parenteses servem para trazer valores que estão fora da função para dentro dela assim conseguindo trabalhar com vários tipos de valores informados pelo usuario

let Soma = (num1, num2) => {
    return num1 + num2;
}

console.log(Soma(num1 = 7, num2 = 5))

console.clear()

let cliques = 0;

function Clique() {
    cliques++;
    console.log(`Número de cliques: ${cliques}`);
}

function ChamaPopUP() {
    alert("Parabéns você me chamou, descompensado!");
}

function PasseMouse() {
    console.log("O mano ta passando o mouse por cima de mim!");
}

function SaiuMouse() {
    console.log("O mano passou o mouse por cima de mim!");
}