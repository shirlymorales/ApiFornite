//depenencias para hacer una request
//en modo callback
//tipos de dependecias en js
//- commonjs: require
//-module: import 

const request = require('request')

//url de conexion a la api rest(dinosaurios)
const url = `https://apisimpsons.fly.dev/api/personajes`

//transaccion asincrona: conexion a la api
let r = request(url , 
               { json:true } , 
               (error , respuesta , body )=>{
                if(error){
                    console.log(error)
                }else{
                     let simpsons = body.results
                    simpsons.forEach((simpson)=>{
                        console.log(simpson.name)
                        console.log("----------")
                    });
                }
               } )