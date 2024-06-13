let pessoa = {
    nome: "",
    idade: "",
    CNH: ""
}

console.log("Qual o seu nome?")
    process.stdin.once("data", function(data) {
        pessoa.nome = data.toString().trim();
    console.log("Quantos anos você tem?")
        process.stdin.once("data", function(data) {
            pessoa.idade = data.toString().trim();
        console.log("Você tem CNH?")
            process.stdin.once("data", function(data) {
                pessoa.CNH = data.toString().trim();

            console.log("Nome: " + pessoa.nome);
            console.log("Idade: " + pessoa.idade);
            console.log("CNH: " + pessoa.CNH);

            });
        });
    });






    

