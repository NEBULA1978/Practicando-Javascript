// Puedes modificar la función tablaMultiplicar para que solo muestre una operación a la vez, reemplazando el bucle for por una operación simple que multiplique el número dado por el índice.Luego, en la función updateTable, puedes incrementar el índice en cada iteración para mostrar una operación diferente en cada actualización:

// Define la función tablaMultiplicar que toma dos argumentos: el número y el índice
function tablaMultiplicar(numero, index) {
    // Crea una cadena de texto que contiene la tabla de multiplicar del número dado
    let resultado = `# Tabla del ${numero} # \n`;
    // Calcula la multiplicación de la operación actual
    let multiplicacion = (index * numero);
    // Añade la multiplicación a la cadena de texto
    resultado += `${index} x ${numero} = ${multiplicacion} \n`;
    // Devuelve la cadena de texto que contiene la tabla de multiplicar
    return resultado;
}

// Define una variable numero con un valor inicial de 5
let numero = 5;
// Define un índice inicial de 0
let index = 0;

// Define la función updateTable que actualiza la tabla de multiplicar
function updateTable() {
    // Limpia la consola
    process.stdout.write('\033c');
    // Escribe la tabla de multiplicar actualizada en la consola
    process.stdout.write(tablaMultiplicar(numero, index));
    // Incrementa el índice
    index++;
    // Verifica si el índice es mayor que 10 y si es así, lo establece en 0 para comenzar de nuevo
    if (index > 10) {
        index = 0;
    }
    // Establece un temporizador para que la función updateTable se ejecute de nuevo después de 2 segundos
    setTimeout(updateTable, 2000);
}

// Invoca la función updateTable por primera vez
updateTable();

// Con este código, se mostrará una operación diferente en cada actualización y se actualizará cada 2 segundos.