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

function invertir(texto){

    let invertido = "";

    for(let letra of texto){
        //console.log(letra);
        invertido = letra + invertido;
    }
    //console.log(invertido)
    return invertido;
}

console.log("Texto invertido: ", invertir("rpasculetweb.es"))

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////


// For normal

function invertir(cadena) {
    let cadenaInvertida = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}
console.log("Texto invertido: ", invertir("rpasculetweb.es"))


// Este código define una función llamada invertir que toma una cadena como argumento.La función crea una variable cadenaInvertida para almacenar la cadena invertida.Luego, usa un bucle for para recorrer la cadena original en orden inverso, agregando cada carácter a cadenaInvertida.Finalmente, la función devuelve cadenaInvertida.

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////

// Aquí está una versión de la función invertir que utiliza un bucle for...in en lugar de un bucle for tradicional:

function invertir(cadena) {
    let cadenaInvertida = '';
    for (const caracter in cadena) {
        cadenaInvertida = cadena[caracter] + cadenaInvertida;
    }
    return cadenaInvertida;
}
console.log("Texto invertido: ", invertir("rpasculetweb.es"))

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////

