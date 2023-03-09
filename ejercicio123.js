// SIN COMENTARIOS

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function tablaMultiplicar(numero, index) {
//     let resultado = `# Tabla del ${numero} # \n`;
//     for (let i = 0; i <= 10; i++) {
//         let multiplicacion = (index * numero);
//         resultado += `${index} x ${numero} = ${multiplicacion} \n`;
//         index = (index % 10) + 1;
//     }
//     return resultado;
// }

// rl.question('Introduce el número para la tabla de multiplicación: ', (answer) => {
//     let numero = parseInt(answer);
//     let index = 1;

//     function updateTable() {
//         process.stdout.write('\033c');
//         process.stdout.write(tablaMultiplicar(numero, index));
//         index = (index % 10) + 1;
//         setTimeout(updateTable, 2000);
//     }

//     updateTable();
//     rl.close();
// });


// COMENTADO

// Importa la biblioteca readline
const readline = require('readline');

// Crea una interfaz de lectura/escritura en la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define la función tablaMultiplicar que toma dos argumentos: el número y el índice
function tablaMultiplicar(numero, index) {
    // Crea una cadena de texto que contiene la tabla de multiplicar del número dado
    let resultado = `# Tabla del ${numero} # \n`;

    // Usa un bucle for para iterar 10 veces y calcular la multiplicación de cada número de 0 a 10 con el número dado
    for (let i = 0; i <= 10; i++) {
        // Calcula la multiplicación del número actual y el número dado
        let multiplicacion = (index * numero);
        // Añade la multiplicación a la cadena de texto, utilizando el índice para controlar el orden de las operaciones
        resultado += `${index} x ${numero} = ${multiplicacion} \n`;
        // Incrementa el índice
        index = (index % 10) + 1;
    }
    // Devuelve la cadena de texto que contiene la tabla de multiplicar
    return resultado;
}

// Pide al usuario que introduzca el número para la tabla de multiplicación
rl.question('Introduce el número para la tabla de multiplicación: ', (answer) => {
    // Convierte la respuesta del usuario en un número entero
    let numero = parseInt(answer);
    // Establece el índice inicial en 1
    let index = 1;

    // Define la función updateTable que actualiza la tabla de multiplicar
    function updateTable() {
        // Limpia la consola
        process.stdout.write('\033c');
        // Escribe la tabla de multiplicar actualizada en la consola
        process.stdout.write(tablaMultiplicar(numero, index));
        // Incrementa el índice
        index = (index % 10) + 1;
        // Establece un temporizador para que la función updateTable se ejecute de nuevo después de 2 segundos
        setTimeout(updateTable, 2000);
    }

    // Invoca la función updateTable por primera vez
    updateTable();
    // Cierra la interfaz de lectura/escritura
    rl.close();
});


// Descripcion
// Este código permite al usuario introducir un número para la tabla de multiplicación que desea ver en la consola.Se utiliza la biblioteca readline para interactuar con el usuario a través de la consola.

// La función tablaMultiplicar toma dos argumentos: el número y el índice.La función crea una cadena de texto que contiene la tabla de multiplicar del número dado y usa un bucle for para iterar 10 veces y calcular la multiplicación de cada número de 0 a 10 con el número dado.El índice se utiliza para controlar el orden de las operaciones en la tabla.La función devuelve la cadena de texto que contiene la tabla de multiplicar.

// La función updateTable actualiza la tabla de multiplicar.Primero, limpia la consola y luego escribe la tabla de multiplicar actualizada en la consola.El índice se actualiza en cada iteración del bucle.La función updateTable se ejecuta cada 2 segundos usando un temporizador setTimeout.

// La función main primero pide al usuario que introduzca el número para la tabla de multiplicación y luego convierte la respuesta en un número entero.El índice inicial se establece en 1. Finalmente, se invoca la función updateTable por primera vez y se cierra la interfaz de lectura / escritura.