// Aquí está una versión de la función invertir que utiliza la función Array.prototype.forEach() en lugar de los bucles for y for...of anteriores:

function invertir(cadena) {
    let cadenaInvertida = '';
    Array.from(cadena).forEach(caracter => {
        cadenaInvertida = caracter + cadenaInvertida;
    });
    return cadenaInvertida;
}
console.log("Texto invertido: ", invertir("rpasculetweb.es"))

// Este código convierte la cadena en un arreglo con la función Array.from(), y luego usa Array.prototype.forEach() para recorrer cada carácter en el arreglo.Al igual que en las versiones anteriores, se coloca cada carácter al principio de la cadena cadenaInvertida en lugar de al final, logrando así la inversión deseada.