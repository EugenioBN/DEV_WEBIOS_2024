let botao = document.querySelector('#calcular');
let paragrafo = document.querySelector('#resultado');

botao.style.color = "white";
botao.style.backgroundColor = "green";
botao.style.borderRadius = "5px";
botao.innerHTML = "Calcular Novo Salário";

function calcularSalario() {
    let salarioInput = document.querySelector('#salarioAtual').value;
    let salarioAtual = parseFloat(salarioInput);

    if (!isNaN(salarioAtual) && salarioAtual > 0) {
        let aumento = salarioAtual * 0.17;
        let reajuste = 215;
        let novoSalario = salarioAtual + aumento + reajuste;

        paragrafo.textContent = `O novo salário é R$ ${novoSalario.toFixed(2).replace('.', ',')}`;
        paragrafo.style.color = "green";
    } else {
        paragrafo.textContent = "Por favor, insira um valor válido para o salário.";
        paragrafo.style.color = "red";
    }
}

botao.addEventListener('click', calcularSalario);
