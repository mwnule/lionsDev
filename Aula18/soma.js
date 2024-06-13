const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (num1) => {
    rl.question("Digite um segundo número: ", (num2) => {
        rl.question("Digite um terceiro número: ", (num3) => {
            num1 = parseFloat(num1)
            num2 = parseFloat(num2)
            num3 = parseFloat(num3)
            resultado = num1 + num2 + num3
            console.log("Valor da operação: " + resultado)
            rl.close()
        });
    });
});