// let listaNummeros = [];

// console.log("Insira 15 números: ");

// process.stdin.on("data", function(data) {
//     let numeros = Number(data.toString().trim());

//     if(listaNummeros.length > 14) {
//         console.log("Aqui estão os numeros digitadis imprimidos por for: ");
//         for (let i = 0; listaNummeros.length > i; i++) {
//             console.log(listaNummeros[i]);
//         }

//     console.log("Usando forEach:")
//     listaNummeros.forEach(function(elemento) {
//         console.log(elemento)
//     });
//     process.exit();
//     } else {
//         listaNummeros.push(numeros);
//         console.log("Insira mais um numero: ")
//     }
// });

let listaNumeros = [];

console.log("Insira 15 números: ");

process.stdin.on("data", function(data) {
    let numero = Number(data.toString().trim());

    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
    } else {
        listaNumeros.push(numero);

        if (listaNumeros.length >= 15) {
            console.log("Aqui estão os números digitados, imprimidos por 'for': ");
            for (let i = 0; i < listaNumeros.length; i++) {
                console.log(listaNumeros[i]);
            }

            console.log("Usando forEach:");
            listaNumeros.forEach(function(elemento) {
                console.log(elemento);
            });
            process.exit();
        } else {
            console.log(`Insira mais um número (${15 - listaNumeros.length} restantes):`);
        }
    }
});
