/*
ENUNCIADO 
¿Cuanto es el x por ciento de x numero ?

ejemplos:
            //el 20% de 100 es 20
tantoPorCiento(20,100)  // Devuelve: 20
tantoPorCiento(43,897)  // Devuelve: 385.71

COMO HACERLO

-Funcion conparametros "porcentaje" y "numero"
-Crear una variable para la operacion del porcentaje
-Devolver string que responda a la pregunta delenunciado
*/

// function tantoPorCiento(porcentaje, numero){
//     let operacion = (numero * (porcentaje/100))
//     let resultado = `El ${porcentaje} % de ${numero} es ${operacion}`;

//     return resultado;
//     //console.log(operacion)
// }

// console.log(tantoPorCiento(20, 897))

function tantoPorCiento(porcentaje, numero) {
    let resultado = (porcentaje / 100) * numero;
    return `El ${porcentaje}% de ${numero} es ${resultado.toFixed(2)}`;
  }
  
  console.log(tantoPorCiento(20, 100));
  // Devuelve: 'El 20% de 100 es 20'
  
  console.log(tantoPorCiento(43, 897));
  // Devuelve: 'El 43% de 897 es 385.71'
  
//   EJEMPLO DE · PRODUCTOS:
let producto1 = 20;
let producto2 = 30;
let producto3 = 40;

let total = producto1 + producto2 + producto3;

console.log(`El precio del producto 1 es: ${producto1}`);
console.log(`El precio del producto 2 es: ${producto2}`);
console.log(`El precio del producto 3 es: ${producto3}`);
console.log(`El precio total de los tres productos es: ${total}`);

// EJERCICIO
// Aquí hay un ejemplo de código que pide al usuario que introduzca el precio y el porcentaje y muestra el resultado:

let precio = parseFloat(prompt('Introduce el precio:'));
let porcentaje = parseFloat(prompt('Introduce el porcentaje:'));

let resultado = (porcentaje / 100) * precio;

console.log(`El ${porcentaje}% de ${precio} es ${resultado.toFixed(2)}`);

// En este ejemplo, se utiliza la función prompt para pedir al usuario que introduzca el precio y el porcentaje.La función parseFloat se utiliza para convertir la entrada del usuario en un número flotante.Luego, se realiza la operación matemática para calcular el porcentaje y se almacena el resultado en una variable resultado.Finalmente, se muestra el resultado en la consola con un mensaje personalizado.