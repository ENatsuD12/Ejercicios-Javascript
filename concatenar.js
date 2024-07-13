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
