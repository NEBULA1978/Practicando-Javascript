// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function tablaMultiplicar(numero, index) {
//     let resultado = `# Tabla del ${numero} # \n`;

//     for (let i = 10; i >= 0; i--) {
//         let multiplicacion = (i * numero);
//         resultado += `${index} x ${numero} = ${multiplicacion} \n`;
//         index = (index + 1) % 11;
//     }
//     return resultado;
// }

// rl.question('Introduce el número para la tabla de multiplicación: ', (answer) => {
//     let numero = parseInt(answer);
//     let index = 10;

//     function updateTable() {
//         process.stdout.write('\033c');
//         process.stdout.write(tablaMultiplicar(numero, index));
//         index = (index + 1) % 11;
//         setTimeout(updateTable, 2000);
//     }

//     updateTable();
//     rl.close();
// });


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tablaMultiplicar(numero, index) {
    let resultado = `# Tabla del ${numero} # \n`;

    for (let i = 10; i >= 0; i--) {
        let multiplicacion = (index * numero);
        resultado += `${index} x ${numero} = ${multiplicacion} \n`;
        index = (index + 1) % 11;
    }
    return resultado;
}

rl.question('Introduce el número para la tabla de multiplicación: ', (answer) => {
    let numero = parseInt(answer);
    let index = 10;

    function updateTable() {
        process.stdout.write('\033c');
        process.stdout.write(tablaMultiplicar(numero, index));
        index = (index + 1) % 11;
        setTimeout(updateTable, 2000);
    }

    updateTable();
    rl.close();
});
