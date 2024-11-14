// Pega elemeno por ID
let valor = document.getElementById('recebeValor')

// Pega o elemento utilizamdp p atributo name
let resultado = document.getElementById('resultado')



const Tabuada = () => {
    // value - guardar o valor que está sendo digitado dentro da variavel
    let guardaValor = valor.value
    resultado.innerHTML = ''
    resultado.style.color = "black"

    if(guardaValor == ''){
        resultado.innerHTML = "Insira um valor válido"
        resultado.style.color = "red"
    }
    else{
        for ( i = 0; i <= 10; i++){
        let resultadoTabuada = guardaValor * i;
        console.log(guardaValor, 'x', i, '=', resultadoTabuada)

        resultado.innerHTML += `<br/>${guardaValor} x ${i} = ${guardaValor * i}`

        // innerHTML
        // console.log ("O valor de ${guardaValor} x ${i} é igual a ${guardaValor * i}");
        }
    }
}

const Limpar = () => {
    resultado.innerHTML = '';
    valor.value = '';
}
