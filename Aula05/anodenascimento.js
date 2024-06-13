let idade = ""
const anoatual = 2024

console.log("Quantos anos você tem?")
    process.stdin.once("data", function (data) {
    idade = parseInt(data.toString().trim());
    let nasceuem = anoatual - idade;
console.log("Você nasceu em " + nasceuem + "?")
process.exit();
});