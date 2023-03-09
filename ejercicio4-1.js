/*
enunciado:

Dada una cadena de texto, darle la vuelta e invertir el orden
de sus caracteres, sin usar metodos propios del lenguaje,
solo estructurasde control

ejemplos:

invertir('holas)  // Devuelve: 'aloh'

COMO HACERLO

-Funcion con parametro "cadena"
-Crear una variable para guardar la cadena invertida
-Bucle que recorra string y guarde los caracteres en las variables

*/
// Define una función llamada "invertir" que toma una cadena como argumento
function invertir(cadena) {
    // Crea una variable llamada "cadenaInvertida" para almacenar la cadena invertida
    let cadenaInvertida = '';

    // Bucle que recorre la cadena en orden inverso
    for (let i = cadena.length - 1; i >= 0; i--) {
        // Agrega cada carácter a "cadenaInvertida"
        cadenaInvertida += cadena[i];
    }

    // Devuelve "cadenaInvertida"
    return cadenaInvertida;
}

// Ejecuta la función "invertir" con la cadena "holas" y muestra el resultado en la consola
console.log(invertir('holas'));
