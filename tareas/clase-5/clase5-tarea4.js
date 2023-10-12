
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $listaDeNumeros = document.querySelectorAll("#lista-de-numeros li");
const numeros = convertirANumeros($listaDeNumeros);
let $promedio = document.querySelector("#promedio");
let $masChico = document.querySelector("#mas-chico");
let $masGrande =  document.querySelector("#mas-grande");
let $masFrecuente = document.querySelector("#mas-frecuente");

$promedio.innerText += ` ${calcularPromedio(numeros).toFixed(2)}.`;
$masChico.innerText += ` ${devolverNumeroMenor(numeros)}.`;
$masGrande.innerText += ` ${devolverNumeroMayor(numeros)}.`;
$masFrecuente.innerText += ` ${devolverNumeroMasFrecuente(numeros)}.`;

function convertirANumeros(lista) {
    const numeros = [];
    for (let i = 0; i < lista.length; i++) {
        numeros.push(Number(lista[i].innerText));
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

function devolverNumeroMenor(numeros) {
    let menor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return menor;
}

function devolverNumeroMayor(numeros) {
    let mayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
}

function devolverNumeroMasFrecuente(numeros) {
    let masFrecuente = numeros[0];
    let cantidadMasFrecuente = 0;
    for (let i = 0; i < numeros.length; i++) {
        let conteoActual = 0;
        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                conteoActual++;             
                if (conteoActual > cantidadMasFrecuente) {
                    masFrecuente = numeros[i];
                    cantidadMasFrecuente++;
                }
            }
        }
        conteoActual = 0;
    }
    return masFrecuente;
}


