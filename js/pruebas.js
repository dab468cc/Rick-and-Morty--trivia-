// puntuaciones
function mostrarPuntuacion(array){
    const contenedor=document.querySelector('#contPuntos')
    
    contenedor.innerHTML=`
    h4-nombre
    p-puntos=acc
    `
}


// SWIPER
// let swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });



//   function crearSwiper(){
//     const contenedor=document.querySelector('#sw')
    
//     contenedor.innerHTML=`
//     <div class="swiper mySwiper">
//         <div class="swiper-wrapper">
//             <div class="swiper-slide">
//                 <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
//             </div>
//             <div class="swiper-slide">
//                 <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
//             </div>
//             <div class="swiper-slide">
//                 <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
//             </div>
//             <div class="swiper-slide">
//                 <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
//             </div>
//             <div class="swiper-slide">
//                 <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
//             </div>
//             <div class="swiper-slide">
//                 <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
//             </div>
//             <div class="swiper-slide">
//                 <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
//             </div>
//             <div class="swiper-slide">
//                 <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
//             </div>
//             <div class="swiper-slide">
//                 <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
//         </div>
//         </div>
//         <div class="swiper-pagination"></div>
//   </div>
  
//   <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
//   <script src="./pruebas.js"></script>
//   </body>
//   `
// }
// crearSwiper()


// const buttonName=document.getElementById("buttonName").addEventListener("click",capturarDatos)
// buttonName.preventDefault()

// function capturarDatos(){
//     let nombre=document.getElementById("inputName").value
//     console.log(nombre)

// }

// const arrParticipantes=[]

// function Participante(nombre,puntuacion){
//     this.nombre=nombre;
//     this.puntuacion=puntuacion;
// }

// function crearParticipantes(nombre,puntuacion){
//     let par =new Participante(nombre,puntuacion)
//     arrParticipantes.push(par)
// }

// crearParticipantes('juan',8)
// crearParticipantes('pedro',9)
// crearParticipantes('arturo',6)
// crearParticipantes('marco',8)

// // console.log(arrParticipantes)

// function subirAlLS(){
//     localStorage.setItem("arrP",JSON.stringify(arrParticipantes))
// }

// function obtenerDelLS(){
//     let datos=JSON.parse(localStorage.getItem("arrP"))
//     console.log(datos)
// }
// // subirAlLS()
// obtenerDelLS()