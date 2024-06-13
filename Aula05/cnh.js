let idade = ""
const anoatual = 2024

console.log("Quantos anos você tem?")
    process.stdin.once("data", function (data) {
    idade = parseInt(data.toString().trim());
    let nasceuem = anoatual - idade;
console.log("Você tem CNH? (responda com sim ou não)")
        process.stdin.once("data", function (data) {
        respostaCNH = data.toString().trim().toLowerCase();
    if (respostaCNH === "sim") {
        console.log("Você tem " + idade + " anos e tem uma CNH.")
    }
    else {
        console.log("Você tem " + idade + " anos e não tem tem uma CNH.")
    }
process.exit();
    })
});

// mudar código depoiss