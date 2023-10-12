
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.
const $mostrarResultado = document.querySelector("#mostrar-total");
const $botonLimpiar = document.querySelector("#boton-limpiar");
const $botonCalcularTiempo = document.querySelector("#boton-calcular-tiempo");
$botonCalcularTiempo.onclick = function(e) {
   
    let totalHoras = sumarListaDeNumeros(document.querySelectorAll(".horas"));
    let totalMinutos = sumarListaDeNumeros(document.querySelectorAll(".minutos"));
    let totalSegundos = sumarListaDeNumeros(document.querySelectorAll(".segundos"));

    if(totalSegundos > 59) {
        totalMinutos += parseInt(pasarSegundosAMinutos(totalSegundos));
        totalSegundos = cambiarDecimalAHorario(pasarSegundosAMinutos(totalSegundos));
    }

    if (totalMinutos > 59) {
        totalHoras += parseInt(pasarMinutosAHoras(totalMinutos));
        totalMinutos = cambiarDecimalAHorario(pasarMinutosAHoras(totalMinutos));
    }

    $mostrarResultado.innerText = `El tiempo total de los videos es: ${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} segundos.`
    
    e.preventDefault();
}

function sumarListaDeNumeros(nodoDeListaDeNumeros) {
    let suma = 0;
    for (let i = 0; i < nodoDeListaDeNumeros.length; i++) {
        suma += Number(nodoDeListaDeNumeros[i].value);
    }
    return suma;
}

function pasarSegundosAMinutos(segundos) {
    const SEGUNDOS_EN_UN_MINUTO = 60;
    return segundos / SEGUNDOS_EN_UN_MINUTO;
}

function cambiarDecimalAHorario(tiempo) {
    const unidadesDeTiempo = 60;
    const tiempoEntero = parseInt(tiempo)
    const unidadDeTiempo = ((tiempo - tiempoEntero) * unidadesDeTiempo).toFixed(0);
    return unidadDeTiempo;
}

function pasarMinutosAHoras(minutos) {
    const MINUTOS_EN_UNA_HORA = 60;
    return minutos / MINUTOS_EN_UNA_HORA;
}

$botonLimpiar.onclick = function() {
    $mostrarResultado.innerText = "";
}
