'use strict';
let test = "Hellow world"
// obtener la fecha y la hora
let hoy = new Date();
let fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
// Asignamos las punteros con query selectos
const fechatext = document.querySelector("#fechatext")
const nombre = document.querySelector("#nombre");
const numero =  document.querySelector("#telefono");
const correo =  document.querySelector("#correo");
const direccion =  document.querySelector("#direccion");
const btnagregar =  document.querySelector("#guardarbtn");
document.getElementById("fechatext").innerHTML = fecha;
const listadocontacto = document.querySelector(".listcontacto");
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    console.log(numero.value,"DD")
  })()

const fakedb = window.localStorage
// Area de funciones
const guardarcontacto = (db,data) =>{
    db.setItem(data.id, JSON.stringify(data))
    // window.location.href = '/test/'
    window.location.href = '/ExamenPkt1/'
}

const crearcardcontacto = (parent, contacto , db) =>{
    console.log(contacto,"contacto") // creacion de templete literario que llenara la lista de manera dinamica
    let elemnto = `
    <li>
    <div class="container-cart-list">
        <div class="containericon-user">
            <i class="fa fa-user-circle fa-8" aria-hidden="true"></i>
        </div>
        <div class="container-info">
            <span>Nombre</span>
            <p class="text-label-info">${contacto.nombre}</p>
            <span>Direccion</span>
            <p class="text-label-info">${contacto.direccion}</p>
            <div>
                <span class="spaninfog">Contacto</span>
                <div class="row containercontactos">
                    <div class="col-7">
                    <i class="fa fa-envelope" aria-hidden="true"></i>  ${contacto.correo}
                    </div>
                    <div class="col-4">
                    <i class="fa fa-phone" aria-hidden="true"></i>  ${contacto.numero}
                    </div>
                </div>
                <div class="col-4 container-btn-delete">
                <button type="button" class="btn btn-danger" id="eliminarbtn" value="${contacto.id}">Eliminar</button>
            </div>
            </div>
        </div>
    </div>
</li>
    `
    parent.insertAdjacentHTML("afterbegin",elemnto)
    const btneliminar =  document.querySelector("#eliminarbtn");
    console.log(btneliminar, "SDASDDAS")
    btneliminar.onclick = (event) => {
        event.preventDefault()
        db.removeItem(btneliminar.value)
        // window.location.href = '/test/'
        window.location.href = '/ExamenPkt1/'
    }
}
const cargarcontactos = (db, parent) => {
    let claves = Object.keys(db)
    claves.forEach (function(value, key) {
         let contacto = JSON.parse(db.getItem(value))
         crearcardcontacto(parent,contacto,db)
      })
}


// funcion de click
btnagregar.onclick = (event) => {
    event.preventDefault()
    let contacto = {   // agregamos en un objeto la lista que guardaremos en local storage
        id: Math.random(1,100), // emulamos un id para poder aceder al valor del arreglo 
        nombre: nombre.value,  // asignamo el value del observable
        direccion: direccion.value,
        correo: correo.value,
        numero: numero.value
    }
    // VALIDACIONES 
     if(direccion.value !== "" && nombre.value !== "" && numero.value !== "" && correo.value !== "" ){
        guardarcontacto(fakedb, contacto) // llamamos la funcion guardar
     } 
      if (nombre.value === ""){
        document.getElementById("validatorn").classList.remove("desaparecer")
         document.getElementById("validatorn").classList.add("aparecer")
     }  if (direccion.value  === ""){
        document.getElementById("validatornd").classList.remove("desaparecer")
        document.getElementById("validatornd").classList.add("aparecer")
     } if (correo.value  === ""){
        document.getElementById("validatorc").classList.remove("desaparecer")
        document.getElementById("validatorc").classList.add("aparecer")
     }
      if (numero.value  === ""){
        document.getElementById("validatort").classList.remove("desaparecer")
        document.getElementById("validatort").classList.add("aparecer")
     }
    console.log(contacto)
}
cargarcontactos(fakedb,listadocontacto)
console.log(btnagregar)