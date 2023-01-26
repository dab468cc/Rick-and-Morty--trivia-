// console.log('hola mundo')


//-------------- randomizador ------------

// array de participantes
// let participante=localStorage.setItem('juan',10)
const participantes=[]






let bottonSi=false
let bottonNo=false

function validarRespuestaSi(){
    if(bottonSi===true){
        alert('el bicho esta vivo')
    }else if(bottonSi===false){
        alert('el bicho lamentablemente esta muerto,respuesta equivocada')    
    }
}
function validarRespuestaNo(){
    if(bottonNo===true){
        alert('el bicho lamentablemente esta muerto,respuesta correcta')
    }else if(bottonNo===false){
        alert('el bicho esta vivo,respuesta equivocada')    
    }
}
function validarPregunta(array){
    const estado =array.status
    if(estado==="Alive"){
        bottonSi=true
    }else{
        bottonNo=true
    }
    console.log(bottonSi)
    console.log(bottonNo)
    console.log(estado)
    document.getElementById("opcionSi").addEventListener("click",validarRespuestaSi)
        
    
    document.getElementById("opcionNo").addEventListener("click",validarRespuestaNo)
        
    
}

function random(){
    let nRandom = Math.random()*(800-1)+1
    nRandom=parseInt(nRandom)
    console.log(nRandom)
    return nRandom
}


function crearPregunta(array){
    const contenedor=document.querySelector('#contPreguntas')
    
    contenedor.innerHTML=`
    <h3 class="pregunta">¿${array.name} se enceunta muerto o vivo?</h3>
    <img src="${array.image}" alt="${array.name}" class="imgPregunta">
    
    <ul class="contRespuestas">
        <li class="respuestas">
            <input type="button" value="vivo" class="b-respuesta" id="opcionSi">
        </li>
        <li class="respuestas">
            <input type="button" value="muerto" class="b-respuesta" id="opcionNo">
        </li>
    </ul>
    `
}
    
    
   

const url="https://rickandmortyapi.com/api/character"

fetch(url)
.then(response=>response.json() )
.then(data=>{
    // num=random()
    // console.log(num)
    console.log(data)
    let dato=data.results[15]
    crearPregunta(dato)
    validarPregunta(dato)
})

.catch(err=>console.log(err))
