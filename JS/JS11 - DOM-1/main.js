// document.body.style.backgroundColor = "Black"

document.title = "Socorro DOM"

// Alterar o atributo lang
document.documentElement.lang = "pt-br"

//document.documentElement.lang = navigator.language

// Criação de elementos com JS
let campoNovo = document.createElement ("button")

// Inserir estilo dentro do HTML
campoNovo.style.backgroundColor = "red"
campoNovo.style.borderRadius = "5px"

// Informar em qual elemento queremos inserir o botão
document.body.appendChild(campoNovo).innerHTML = "Enviar"