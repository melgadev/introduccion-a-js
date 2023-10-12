
//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del 
//usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
const $titulo = document.querySelector("h1");
const $parrafoTexto = document.querySelector("#texto");
const $botonMostrarInformacion = document.querySelector("#boton-mostrar-informacion");
$botonMostrarInformacion.onclick = function(e) {
    const nombres = document.querySelector("#nombres").value;
    const apellidos = document.querySelector("#apellidos").value;

    $titulo.innerText = `Bienvenido, ${nombres} ${apellidos}!`;
    $parrafoTexto.innerText = `${nombres} ${apellidos}`;

    e.preventDefault();
}
