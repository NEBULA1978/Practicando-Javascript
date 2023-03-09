function esPalindromo(texto) {
    let textoLimpio = texto.replace(/\W/g, '').toLowerCase(); // Eliminamos los espacios y ponemos el texto en minúsculas
    let textoInvertido = textoLimpio.split('').reverse().join('');

    return textoLimpio === textoInvertido;
}

console.log("Es un palíndromo 'Ana'? " + esPalindromo("Ana"));
console.log("Es un palíndromo 'La ruta natural'? " + esPalindromo("La ruta natural"));

// En este ejemplo, primero limpiamos el texto de cualquier caracter que no sea una letra o número, y lo convertimos a minúsculas.Luego, lo invertimos y comparamos con el texto original.Si son iguales, entonces es un palíndromo.

function esPalindromoFrase(frase) {
    let fraseLimpia = frase.replace(/\W/g, '').toLowerCase(); // Eliminamos los espacios y ponemos la frase en minúsculas
    let fraseInvertida = fraseLimpia.split('').reverse().join('');

    return fraseLimpia === fraseInvertida;
}

console.log("Es un palíndromo 'A man a plan a canal Panama'? " + esPalindromoFrase("A man a plan a canal Panama"));
console.log("Es un palíndromo 'No lemon, no melon'? " + esPalindromoFrase("No lemon, no melon"));

// Este ejemplo funciona de la misma manera que el anterior, pero en lugar de comparar una sola palabra, estamos comparando una frase completa.