const needle = require('needle')

const url = 'https://fortnite-api.com/v2/news'

needle('get', url , {json:true})
    .then((respuesta)=>{
        let fornites =(respuesta.data)
        fornites.forEach(fornite=>{
            console.log(fornite.id)
            console.log(".........")
        });
    })
    .catch((error)=>{
        console.log(error)
    })