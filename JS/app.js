// Función para validar si una cadena es vacía
function esCadenaVacia(cadena) {
    return cadena.trim() === '';
}
// Función para validar si una entrada es un número válido
function esNumeroValido(entrada) {
    return !isNaN(entrada);
}
// Función para validar si una cadena contiene solo letras
function contieneSoloLetras(cadena) {
    return /^[a-zA-Z\s]*$/.test(cadena);
}
// Solicitar el nombre y el apellido usando prompt
let nombre = "";
let apellido = "";
do {
    nombre = prompt("Por favor, ingresa tu nombre:");
} while (!contieneSoloLetras(nombre));
do {
    apellido = prompt("Por favor, ingresa tu apellido:");
} while (!contieneSoloLetras(apellido));
// Función para mostrar un mensaje de saludo
function saludar(nombre, apellido) {
    alert(`¡Hola, ${nombre} ${apellido}!`);
}
// Validar si se ingresaron datos en ambos campos
if (esCadenaVacia(nombre) || esCadenaVacia(apellido)) {
    alert('Por favor, ingresa tu nombre y apellido.');
    window.location.href = "/Entrega 01/solicitud.html";
} else {
    // Obtener el formulario y los elementos donde se mostrará la nota final
    const formulario = document.getElementById('calculadora');
    const nombreCompleto = document.getElementById('nombreCompleto');
    const notaFinal = document.getElementById('notaFinal');

    nombreCompleto.textContent = nombre + ' ' + apellido;
    // Agregar un evento de envío al formulario
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        // Obtener las notas y porcentajes ingresados por el usuario
        const nota1 = parseFloat(document.getElementById('nota1').value);
        const porcentaje1 = parseFloat(document.getElementById('porcentaje1').value);
        
        const nota2 = parseFloat(document.getElementById('nota2').value);
        const porcentaje2 = parseFloat(document.getElementById('porcentaje2').value);

        const nota3 = parseFloat(document.getElementById('nota3').value);
        const porcentaje3 = parseFloat(document.getElementById('porcentaje3').value);

        const nota4 = parseFloat(document.getElementById('nota4').value);
        const porcentaje4 = parseFloat(document.getElementById('porcentaje4').value);

        const nota5 = parseFloat(document.getElementById('nota5').value);
        const porcentaje5 = parseFloat(document.getElementById('porcentaje5').value);

        const nota6 = parseFloat(document.getElementById('nota6').value);
        const porcentaje6 = parseFloat(document.getElementById('porcentaje6').value);

        const nota7 = parseFloat(document.getElementById('nota7').value);
        const porcentaje7 = parseFloat(document.getElementById('porcentaje7').value);

        const nota8 = parseFloat(document.getElementById('nota8').value);
        const porcentaje8 = parseFloat(document.getElementById('porcentaje8').value);

        const nota9 = parseFloat(document.getElementById('nota9').value);
        const porcentaje9 = parseFloat(document.getElementById('porcentaje9').value);

        const nota10 = parseFloat(document.getElementById('nota10').value);
        const porcentaje10 = parseFloat(document.getElementById('porcentaje10').value);

        if (!esNumeroValido(nota1) || !esNumeroValido(nota2) || !esNumeroValido(nota3) || !esNumeroValido(nota4) || !esNumeroValido(nota5) || !esNumeroValido(nota6) || !esNumeroValido(nota7) || !esNumeroValido(nota8) || !esNumeroValido(nota9) || !esNumeroValido(nota10) || !esNumeroValido(porcentaje1) || !esNumeroValido(porcentaje2) || !esNumeroValido(porcentaje3) || !esNumeroValido(porcentaje4) || !esNumeroValido(porcentaje5) || !esNumeroValido(porcentaje6) || !esNumeroValido(porcentaje7) || !esNumeroValido(porcentaje8) || !esNumeroValido(porcentaje9) || !esNumeroValido(porcentaje10)) {
            alert('Por favor, ingresa números válidos en los campos de notas y porcentajes.');
        } else {
            const notaFinalCalculada = (nota1 * (porcentaje1 / 100)) + (nota2 * (porcentaje2 / 100)) + (nota3 * (porcentaje3 / 100)) + (nota4 * (porcentaje4 / 100)) + (nota5 * (porcentaje5 / 100)) + (nota6 * (porcentaje6 / 100)) + (nota7 * (porcentaje7 / 100)) + (nota8 * (porcentaje8 / 100)) + (nota9 * (porcentaje9 / 100)) + (nota10 * (porcentaje10 / 100));
            nombreCompleto.textContent = nombre + ' ' + apellido;
            notaFinal.textContent = notaFinalCalculada.toFixed(2);
        }
});
// Saludar al cargar la página
saludar(nombre, apellido);
}