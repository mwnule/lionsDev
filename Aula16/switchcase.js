console.log("Digite o código desejado: ");
process.stdin.on("data", function (data) {
    let numero = parseInt(data)
    switch (numero) {
        case 1:
            console.log("Alimento não-perecível")
            break;
        case 2:
            console.log("Alimento perecível")
            break;
        case 3:
            console.log("Vestuário")
            break;
        case 4:
            console.log("Limpeza")
            break;
    }
    process.exit()
});

// Produtos = [Pringles, Saia Jeans, Banana, Vanish]

// console.log("Digite o código desejado: ");
// process.stdin.on("data", function (data) {
//     let numero = parseInt(data)
//     switch (numero) {
//         case 1:
//             console.log("Alimento não-perecível")
//             break;
//         case 2:
//             console.log("Alimento perecível")
//             break;
//         case 3:
//             console.log("Vestuário")
//             break;
//         case 4:
//             console.log("Limpeza")
//             break;
//     }
//     process.exit()
// });
