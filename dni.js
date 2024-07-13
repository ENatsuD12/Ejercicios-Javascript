function calcularLetraDNI() {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let numero = prompt('Ingrese un número de DNI entre 0 y 99999999:');

    while (numero !== null) {
        if (isNaN(numero) || numero < 0 || numero > 99999999) {
            alert('Número inválido. Intente nuevamente.');
        } else {
            const letra = letras[numero % 23];
            alert(`La letra para el DNI ${numero} es ${letra}.`);
            break;
        }
        numero = prompt('Ingrese un número de DNI entre 0 y 99999999:');
    }
}
