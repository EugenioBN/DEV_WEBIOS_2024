let URL = 'https://dog.ceo/api/breeds/image/random'

const DogApi = async () =>{
    // Faço a consulta na API e retorne o JSON na variavel resp

    let resp = await fetch(URL)

    let exemplo = resp.json()
    console.log(exemplo)
}

DogApi()