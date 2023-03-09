/*
BIEN
Advertyencias:

PRACTICAR Y RAZONAR

Hacer tabla multiplicar

*/

// function tablaMultiplicar(numero) {
//     //let resultado = "# Tabla del "+numero+" #"; es lo mismo abajo
//     let resultado = `# Tabla del ${numero} # \n`;// concadenamos con \n salto linea

//     for (let i = 0; i <= 10; i++) {
//         let multiplicacion = (i * numero);

//         //console.log(multiplicacion)
//         //concadeno resultado para que se vea bien
//         resultado += `${i} x ${numero} = ${multiplicacion} \n`
//         // 1 x 5 = 5 arriba hace que se vea asi en cada iteracion del bucle 
//     }
//     return resultado;

// }

// console.log(tablaMultiplicar(5))


// //////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////

// Define la función tablaMultiplicar que toma un número como argumento
function tablaMultiplicar(numero) {
    // Crea una cadena de texto que contiene la tabla de multiplicar del número dado
    let resultado = `# Tabla del ${numero} # \n`;

    // Usa un bucle for para iterar 10 veces y calcular la multiplicación de cada número de 0 a 10 con el número dado
    for (let i = 0; i <= 10; i++) {
        let multiplicacion = (i * numero);
        // Añade la multiplicación a la cadena de texto
        resultado += `${i} x ${numero} = ${multiplicacion} \n`;
    }
    // Devuelve la cadena de texto que contiene la tabla de multiplicar
    return resultado;
}

// Define una variable numero con un valor inicial de 5
let numero = 5;

// Define la función updateTable que actualiza la tabla de multiplicar
function updateTable() {
    // Limpia la consola
    process.stdout.write('\033c');
    // Escribe la tabla de multiplicar actualizada en la consola
    process.stdout.write(tablaMultiplicar(numero));
    // Incrementa el número
    numero++;
    // Verifica si el número es mayor que 10 y si es así, lo establece en 1 para comenzar de nuevo
    if (numero > 10) {
        numero = 1;
    }
    // Establece un temporizador para que la función updateTable se ejecute de nuevo después de 2 segundos
    setTimeout(updateTable, 2000);
}

// Invoca la función updateTable por primera vez
updateTable();


// En este ejemplo, la función updateTable() se invoca por primera vez al final del código, y luego se establece un temporizador para que se ejecute de nuevo después de 2000 milisegundos(2 segundos).La función utiliza process.stdout.write('\033c') para limpiar la consola y luego escribe la tabla de multiplicación actualizada con process.stdout.write().Finalmente, el número se incrementa y se verifica si es mayor que 10, y si es así, se vuelve a establecer en 1 para comenzar de nuevo.