let idade = ""

console.log("Quantos anos você tem?") 
    process.stdin.once("data", function (data) {
    idade = parseInt(data.toString().trim());
    if (idade >= 18) {
        console.log("Você é maior de idade")
    }
    else {
        console.log("Você é menor de idade")
    }
process.exit();
});