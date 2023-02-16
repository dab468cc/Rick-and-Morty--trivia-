// console.log('hola mundo')



// VALIDACIONES
let accP=1

let bottonSi=false
let bottonNo=false

function validarRespuestaSi(){
    if(bottonSi===true){
        alert('el bicho esta vivo respuesta correcta')
        puntos=accP++
        mostarPuntos()
    }else if(bottonSi===false){
        alert('el bicho lamentablemente esta muerto,respuesta equivocada')    
    }
}
function validarRespuestaNo(){
    if(bottonNo===true){
        alert('el bicho lamentablemente esta muerto,respuesta correcta')
        puntos=accP++
        mostarPuntos()
        return accP
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

// PUNTUACION
let puntos=accP
function mostarPuntos(){
    console.log(puntos)

    const contenedor=document.querySelector('#contPuntos')
    contenedor.innerHTML=`
    Puntos:${puntos}
    `
    cp()
    finalizar()
}


//-------------- randomizador ------------
let nRandom=0
function random(){
    nRandom = Math.random()*(10-1)+1
    nRandom=parseInt(nRandom)
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

    
    
   
function cp(){
    random()
    const url="https://rickandmortyapi.com/api/character"

fetch(url)
.then(response=>response.json() )
.then(data=>{
    // num=random()
    // console.log(num)
    console.log(data)
    let dato=data.results[nRandom]
    crearPregunta(dato)
    validarPregunta(dato)
})

.catch(err=>console.log(err))
}
cp()

// USUSARIO
let jugadores=[]
class jugadorManager {
    constructor(nombre,puntos){
        this.nombre=nombre,
        this.puntos=puntos
        
    }
}

function crearJugador(nombre,puntos){
    let jugador= new jugadorManager(nombre,puntos)
    jugadores.push(jugador)
    console.log(jugadores)
}

// FINALIZAR
function finalizar(){
    if(puntos===2){
        alert('test acabado')
        crearJugador('juan',puntos)
    }
    
}