const axios = require('axios')
const url = 'https://apisimpsons.fly.dev/api/personajes'


async function leerSimpsons(){
    const respuesta = await axios.get(url)
    respuesta.data.results.forEach(element => {
        console.log(element.name)
        console.log("+++++++++++")
    });
}

leerSimpsons()