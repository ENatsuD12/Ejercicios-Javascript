function verificarEdad() {
    let edad = prompt('Ingrese su edad:');
    const resultado = document.getElementById('resultadoEdad');
    
    if (edad === null) {
        resultado.textContent = 'Proceso cancelado.';
        return;
    }
    
    edad = parseInt(edad);
    
    if (isNaN(edad) || edad < 0 || edad > 120) {
        alert('Edad no válida. Por favor, ingrese una edad entre 0 y 120 años.');
        resultado.textContent = 'Edad no válida.';
        return;
    }
    
    if (edad >= 18) {
        resultado.textContent = 'Ya puede conducir.';
    } else {
        resultado.textContent = 'No puede conducir.';
    }
}
