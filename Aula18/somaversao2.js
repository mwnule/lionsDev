const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1;
let num2;
let num3;
let contador = 0;

console.log("Digite um número: ")

rl.on("line", (resposta) => {
    contador++
    if (contador === 1) {
        num1 = parseFloat(resposta)
        console.log("Digite um número: ")
    } else if (contador === 2){
        num2 = parseFloat(resposta)
        console.log("Digite um número: ")
    } else if (contador === 3) {
        num3 = parseFloat(resposta)
        const resultado = num1 + num2 + num3
        console.log("Valor da operação: " + resultado)
        rl.close();
    }
});
