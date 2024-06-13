let hobbies = [];

console.log("Quais são seus hobbies?")
process.stdin.once("data", function(data) {
    let resposta = data.toString().trim();
    if (resposta.split(",")) {
        hobbies = resposta.split(",").map(String)
        console.log(hobbies)
    }
    process.exit()
}); 