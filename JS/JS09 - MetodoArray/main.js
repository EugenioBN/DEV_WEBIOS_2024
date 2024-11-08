// Array
let frutas = ["uva", "laranja", "manga", "melancia", "kiwi", "abacate", "banana", "morango"] // Coloque o nome de 8 frutas

frutas.forEach(Percorrer())

             // conteúdo, índice
function Percorrer(indice, valor){
    console.log(valor); // conteudo da posição
    console.log(indice); // número da posição
}

/*
for(i = 0; i <= frutas.length ; i++){
    console.log(frutas[i]);
    console.log(i); 
}
*/