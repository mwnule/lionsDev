let input = "";
let numbers = [];

console.log("Digite 10 números, de 0 a 100, divididos por vírgula");

process.stdin.once("data", function(data) {
    input = data.toString().trim();
    if (input.split(",").length === 10) {
        numbers = input.split(",").map(Number);
        console.log(numbers)
    }
    process.exit()
});