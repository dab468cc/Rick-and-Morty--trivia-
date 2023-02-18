// USUSARIO
let jugadores=[]

if(!localStorage.getItem('usuarios')){
    localStorage.setItem('usuarios',JSON.stringify(jugadores))
}
jugadores=JSON.parse(localStorage.getItem('usuarios'))

class jugadorManager {
    constructor(nombre,puntos){
        this.nombre=nombre,
        this.puntos=puntos
        
    }
}

function crearJugador(nombre,puntos){
    let jugador= new jugadorManager(nombre,puntos)
    jugadores.push(jugador)
    localStorage.setItem('usuarios',JSON.stringify(jugadores))
}
let nombre=localStorage.getItem('usuario')

//-------------- randomizador ------------
let nRandom=0
function random(){
    nRandom = Math.random()*(18-1)+1
    nRandom=parseInt(nRandom)
    return nRandom
}
// VALIDACIONES
let accP=1

let bottonSi=false
let bottonNo=false

function validarRespuestaSi(){
    if(bottonSi===true){
        alert('el bicho esta vivo respuesta correcta')
        puntos=accP++
        accI++
        mostarPuntos()
    }else if(bottonSi===false){
        alert('el bicho lamentablemente esta muerto,respuesta equivocada')  
        accI++
        mostarPuntos()  
    }
}
function validarRespuestaNo(){
    if(bottonNo===true){
        alert('el bicho lamentablemente esta muerto,respuesta correcta')
        puntos=accP++
        accI++
        mostarPuntos()
        return accP
    }else if(bottonNo===false){
        alert('el bicho esta vivo,respuesta equivocada') 
        accI++
        mostarPuntos()  
    }
}
function validarPregunta(array){
    const estado =array.status
    if(estado==="Alive"){
        bottonSi=true
        bottonNo=false
    }else if(estado==="Dead"||estado==="unknown"){
        bottonNo=true
        bottonSi=false
    }
    document.getElementById("opcionSi").addEventListener("click",validarRespuestaSi)
    document.getElementById("opcionNo").addEventListener("click",validarRespuestaNo)  
}
// PUNTOS
let puntos=accP
function mostarPuntos(){
    const contenedorPuntos=document.querySelector('#contPuntos')
    contenedorPuntos.innerHTML=`
    Puntos:${puntos}
    `
    cp()
    finalizar()
}
function mostrarNombre(){
    const contenedorNombre=document.querySelector('#contNombre')
    contenedorNombre.innerHTML=`
    ${nombre}
`
}
mostrarNombre()
// INTENTOS
let accI=1

// FINALIZAR
function finalizar(){
    if(puntos===10||accI===10){
        alert(`test terminado,tu puntiacion es de ${puntos}`)
        alert('volveremos al inicio')
        crearJugador(nombre,puntos)
        volver('../index.html')
    }
    
}

function volver(url){
    window.open(url, '_blank')
}
   
 
// CREAR PREGUNTAS
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
    let dato=data.results[nRandom]
    crearPregunta(dato)
    validarPregunta(dato)
})

.catch(err=>console.log(err))
}
cp()

