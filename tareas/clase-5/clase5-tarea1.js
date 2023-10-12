
//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const $calcular = document.querySelector("#calcular");

$calcular.onclick = function(e) {
    const sueldoAnual = Number(document.querySelector("#sueldo-anual").value);
    const $sueldoMensual = document.querySelector("#sueldo-mensual");
    $sueldoMensual.value = calcularSueldoMensual(sueldoAnual).toFixed(2);
    
    e.preventDefault();
}

function calcularSueldoMensual(sueldoAnual) {
    return sueldoAnual / 12;
}
