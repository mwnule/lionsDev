console.log("Digite um número inteiro")
    process.stdin.once("data", function(data) {
    numero = parseInt(data.toString().trim());
    if (numero % 2 === 0) {
        console.log("Seu número é par!\n")
    }
    else if (isNaN(numero)) {
        console.log("Inválido!")
    }
    else {
        console.log("Seu número é ímpar!\n")
    }
    process.exit();
});

// pesquisar sobre boas práticas do código
// tentar fazer o código responder a SOMENTE números pares