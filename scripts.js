function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.section');
    secciones.forEach(seccion => {
        seccion.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function verificarEdad() {
    const edad = document.getElementById('edad').value;
    const resultado = document.getElementById('resultadoEdad');
    if (edad >= 18) {
        resultado.textContent = 'Ya puede conducir.';
    } else {
        resultado.textContent = 'No puede conducir.';
    }
}

function mostrarCalificacion() {
    const nota = parseFloat(document.getElementById('nota').value);
    const resultado = document.getElementById('resultadoNota');
    let calificacion = '';

    if (nota >= 0 && nota < 3) {
        calificacion = 'Muy deficiente';
    } else if (nota >= 3 && nota < 5) {
        calificacion = 'Insuficiente';
    } else if (nota >= 5 && nota < 6) {
        calificacion = 'Suficiente';
    } else if (nota >= 6 && nota < 7) {
        calificacion = 'Bien';
    } else if (nota >= 7 && nota < 9) {
        calificacion = 'Notable';
    } else if (nota >= 9 && nota <= 10) {
        calificacion = 'Sobresaliente';
    } else {
        calificacion = 'Nota no válida';
    }

    resultado.textContent = calificacion;
}

function pedirCadenas() {
    let resultado = '';
    let cadena;

    while (true) {
        cadena = prompt('Ingrese una cadena de texto:');
        if (cadena === null) {
            break;
        }
        resultado += cadena + '-';
    }

    if (resultado.endsWith('-')) {
        resultado = resultado.slice(0, -1);
    }

    document.getElementById('resultadoCadena').textContent = resultado;
}

function calcularLetraDNI() {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let numero = prompt('Ingrese un número de DNI entre 0 y 99999999:');

    while (numero !== null) {
        if (isNaN(numero) || numero < 0 || numero > 99999999) {
            alert('Número inválido. Intente nuevamente.');
        } else {
            const letra = letras[numero % 23];
            alert(`La letra para el DNI ${numero} es ${letra}.`);
        }
        numero = prompt('Ingrese un número de DNI entre 0 y 99999999:');
    }
}
