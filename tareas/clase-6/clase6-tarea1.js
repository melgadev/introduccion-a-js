/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

*/

const $botonCantidadIntegrantes = document.querySelector("#boton-cantidad-integrantes");
$botonCantidadIntegrantes.onclick = function(e) {
    const $inputCantidadIntegrantes = document.querySelector("#cantidad-integrantes");
    $inputCantidadIntegrantes.disabled = true;
    const cantidadIntegrantes = Number($inputCantidadIntegrantes.value);

    const $cargarEdadesIntegrantes = document.querySelector('#edades-integrantes');

    for (let i = cantidadIntegrantes; i > 0; i--) {
               
        const $parrafo = document.createElement("p");
        const etiquetaIntegrante = document.createElement("label");
        etiquetaIntegrante.textContent = `Edad integrante N°${i}: `;
        const inputIntegrante = document.createElement("input");
        inputIntegrante.className = "integrante";
        inputIntegrante.id = `integrante-${i}`
        inputIntegrante.type = "number";
        inputIntegrante.size = "3";
        inputIntegrante.max = "130";
        inputIntegrante.min = "1";
        etiquetaIntegrante.appendChild(inputIntegrante);
        $parrafo.appendChild(etiquetaIntegrante)
        $cargarEdadesIntegrantes.prepend($parrafo);
        mostrarBotonCalcular();
    }
    e.preventDefault();
}

const $mostrarResultados = document.querySelector("#mostrar-resultados");
const $botonCalcularEdades = document.querySelector("#boton-calcular-edades");
$botonCalcularEdades.onclick = function(e) {
    deshabilitarInputs();
    const $edadPromedio = document.querySelector("#edad-promedio");
    const $edadMenor = document.querySelector("#edad-menor");
    const $edadMayor = document.querySelector("#edad-mayor");
    
    const $edadesIntegrantes = document.querySelectorAll(".integrante");
    const edadesIntegrantes = convertirANumeros($edadesIntegrantes);
   
        const edadPromedio = calcularPromedio(edadesIntegrantes)
        $edadPromedio.innerText += ` ${Number.isInteger(edadPromedio) ? edadPromedio : edadPromedio.toFixed(2)} años.`
        $edadMenor.innerText += ` ${devolverMenor(edadesIntegrantes)} años.`
        $edadMayor.innerText += ` ${devolverMayor(edadesIntegrantes)} años.`
        
    ocultarBotonCalcular();
    mostrarResultados();
    mostrarBotonReiniciar();
    
    e.preventDefault();
}

function mostrarBotonCalcular() {
    $botonCalcularEdades.className = "";
}

function ocultarBotonCalcular() {
    $botonCalcularEdades.className = "oculto";
}

function mostrarBotonReiniciar() {
    $botonReiniciar.className = "";
}

function mostrarResultados() {
    $mostrarResultados.className = "";
}

function ocultarResultados() {
    $mostrarResultados.className = "oculto";
}

function deshabilitarInputs() {
    const $inputs = document.querySelectorAll('form input');
    for (let i = 0; i < $inputs.length; i++) {
        $inputs[i].disabled = true;
    }
}

function convertirANumeros(listaDeNumeros) {
    const numeros = [];
    for (let i = 0; i < listaDeNumeros.length; i++) {
        if (listaDeNumeros[i].valueAsNumber) {
            numeros.push(Number(listaDeNumeros[i].value));
        }
    }
    if (numeros.length == 0) {
        numeros.push(0);
    }
    return numeros;
}

function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return suma / numeros.length;
}

function devolverMenor(numeros) {
    let menor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return menor;
}

function devolverMayor(numeros) {
    let mayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
}

/*
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonReiniciar = document.querySelector("#reiniciar");
$botonReiniciar.onclick = function() {
    location.reload();
}
