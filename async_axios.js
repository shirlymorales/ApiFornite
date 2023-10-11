const axios = require('axios')
const url = 'https://fortnite-api.com/v2/news'


axios.get(url)
     .then((respuesta) => {
        //console.log(respuesta.data.data.br.motds)
        respuesta.data.data.br.motds.forEach(element => {
            console.log(element.title)
            console.log("+++++++++++")
        });
    })
    .catch((error) => console.log(error))