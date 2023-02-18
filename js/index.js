
// SWIPER
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// let nombre=document.getElementById('usuario').value
// document.getElementById("buttonName").addEventListener("click",mostrar)
// function mostrar(){
//   console.log(nombre)
// } 
// let buttonName=document.getElementById('buttonName')
// buttonName.addEventListener('click',mostrar)
// function mostrar(){
//   console.log('hola desde el button')
//   stopDefAct(e n)
// }
// function stopDefAct(e){
//   e.preventDefault()

// }

let nombre='juan'

localStorage.setItem('usuario',nombre)

let usuarios=JSON.parse(localStorage.getItem('usuarios'))

// function crearTabla(array){
//   const contenedorUsuarios=document.querySelector('#contUsuarios')
//   array.forEach(array => {
//     contenedorUsuarios.innerHTML=`
//     <tr>
//      <td>${array.nombre}</td>
//      <td>${array.puntos}</td>
//     </tr>
// `
//   });  

// }
function crearTabla(array){
const contenedor = document.querySelector('#contUsuarios')
array.forEach(array =>{
const linea = document.createElement("tr")
linea.className="lineaUsuario"
// console.log(card)
linea.innerHTML=`
<td>${array.nombre}</td>  
<td>${array.puntos}</td>
`
contenedor.appendChild(linea)


});
}
crearTabla(usuarios)