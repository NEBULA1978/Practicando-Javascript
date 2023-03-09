const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tablaMultiplicar(numero) {
    let resultado = `# Tabla del ${numero} # \n`;

    for (let i = 0; i <= 10; i++) {
        let multiplicacion = (i * numero);
        resultado += `${i} x ${numero} = ${multiplicacion} \n`;
    }

    return resultado;
}

rl.question('Introduce el número para la tabla de multiplicación: ', (answer) => {
    let numero = parseInt(answer);

    console.log(tablaMultiplicar(numero));

    rl.question('¿Cuál es el resultado de 0 x ' + numero + '? ', (respuesta) => {
        let resultadoCorrecto = 0 * numero;
        if (parseInt(respuesta) === resultadoCorrecto) {
            console.log("Correcto!");
        } else {
            console.log("Incorrecto. La respuesta correcta es " + resultadoCorrecto + ".");
        }
        rl.close();
    });
});

// Descripcion

// Este código es un ejemplo de una tabla de multiplicación en JavaScript.La función tablaMultiplicar(numero) toma un número como argumento y devuelve una cadena de texto que representa la tabla de multiplicar del número dado.La cadena de texto se construye utilizando un bucle for que itera 10 veces y calcula la multiplicación de cada número de 0 a 10 con el número dado.

    // Luego, se pide al usuario que introduzca el número para la tabla de multiplicación y se llama a la función tablaMultiplicar con el número dado.Finalmente, se muestra en la consola la tabla de multiplicar y se pide al usuario que introduzca el resultado de una de las operaciones de la tabla.