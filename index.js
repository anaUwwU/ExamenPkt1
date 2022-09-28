'use strict';

let test = "Hellow world"

// Asignamos las punteros con query selectos
const nombre = document.querySelector("#nombre");
const numero =  document.querySelector("#telefono");
const correo =  document.querySelector("#correo");
const direccion =  document.querySelector("#direccion");
const btnagregar =  document.querySelector("#guardarbtn");


const listadocontacto = document.querySelector(".listcontacto");

const fakedb = window.localStorage



// Area de funciones
const guardarcontacto = (db,data) =>{
    db.setItem(data.id, JSON.stringify(data))
    window.location.href = '/ExamenPkt1'
}

const crearcardcontacto = (parent, contacto , db) =>{
    console.log(contacto,"contacto")
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
                <div class="row">
                    <div class="col-4">
                    <i class="fa fa-envelope" aria-hidden="true"></i>  ${contacto.correo}
                    </div>
                    <div class="col-4">
                    <i class="fa fa-phone" aria-hidden="true"></i>  ${contacto.numero}
                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-danger" id="eliminarbtn" value="${contacto.id}">Eliminar</button>
                    </div>
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
        window.location.href = '/ExamenPkt1'
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
    
    guardarcontacto(fakedb, contacto) // llamamos la funcion guardar declarada arriba

    console.log(contacto)
}


cargarcontactos(fakedb,listadocontacto)

console.log(btnagregar)
