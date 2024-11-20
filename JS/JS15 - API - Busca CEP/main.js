let URL = "https://viacep.com.br/ws/02451040/json/"

let cep = document.getElementById('cep')

async function BuscaCep(){
   await fetch(URL).then((response) => {
        // Transformar JSON em OBJ
        return response.json();
   }).then((response) => {
        document.getElementById('cep').value = response.cep;
        document.getElementById('rua').value = response.logradouro;
        document.getElementById('complemento').value = response.complemento;
        document.getElementById('bairro').value = response.bairro;
        document.getElementById('estado').value = response.estado;

   })
}

BuscaCep();

// let viaCEP = {
//     "cep": "02451-040",
//     "logradouro": "Rua Francisca Biriba",
//     "complemento": "",
//     "unidade": "",
//     "bairro": "Santa Teresinha",
//     "localidade": "São Paulo",
//     "uf": "SP",
//     "estado": "São Paulo",
//     "regiao": "Sudeste",
//     "ibge": "3550308",
//     "gia": "1004",
//     "ddd": "11",
//     "siafi": "7107"
// }