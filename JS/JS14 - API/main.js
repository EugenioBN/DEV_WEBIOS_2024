let URL = 'https://dog.ceo/api/breeds/image/random'

const DogApi = async () =>{
    // Faço a consulta na API e retorne o JSON na variavel resp

    await fetch(URL).then((response) => {
        // Transformar o JSON recebido pelo FETCHem Obj..}
        return response.json();
    }).then((response) => {
        // Apresentar as informações para o Usuario
        // Transformando novamente o OBJ em JSON

        document.getElementById('mostraJSON').innerText = JSON.stringify(response);

        let image = `<img style="width: 200px; height:200px" src="${response.message}" alt="">`

        document.getElementById('mostraIMG').innerHTML = image;
    })

    // let exemplo = resp.json()
    // console.log(exemplo)
}

DogApi()