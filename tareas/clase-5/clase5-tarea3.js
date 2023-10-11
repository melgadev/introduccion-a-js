
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.
const $mostrarResultado = document.querySelector("#mostrar-total");
const $limpiar = document.querySelector("#limpiar");
const $calcularTiempo = document.querySelector("#calcular-tiempo");
$calcularTiempo.onclick = function(e) {
   
    let totalHoras = sumarTotales(document.querySelectorAll(".horas"));
    let totalMinutos = sumarTotales(document.querySelectorAll(".minutos"));
    let totalSegundos = sumarTotales(document.querySelectorAll(".segundos"));

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

function sumarTotales(nodo) {
    let suma = 0;
    for (let i = 0; i < nodo.length; i++) {
        suma += Number(nodo[i].value);
    }
    return suma;
}

function pasarSegundosAMinutos(segundos) {
    const UN_MINUTO = 60;
    const minutos = segundos / UN_MINUTO;
    return minutos;
}

function cambiarDecimalAHorario(tiempo) {
    const unidadesDeTiempo = 60;
    const tiempoEntero = parseInt(tiempo)
    const unidadDeTiempo = ((tiempo - tiempoEntero) * unidadesDeTiempo).toFixed(0);
    return unidadDeTiempo;
}

function pasarMinutosAHoras(minutos) {
    const UNA_HORA = 60;
    const horas = minutos / UNA_HORA;
    return horas;
}

$limpiar.onclick = function() {
    $mostrarResultado.innerText = "";
}
