let nome = "";
let idade = "";

console.log("Qual é o seu nome?");
    process.stdin.once("data", function(data){
        nome= data.toString().trim();
console.log("Qual é a sua idade?");
    process.stdin.once("data", function(data) {
        idade= data.toString().trim();
        console.log("Seu nome é " + nome + " e sua idade é " + idade);
        process.exit(); // Para encerrar o processo após a captura dos valores
    });
})
