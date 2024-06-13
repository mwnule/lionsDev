
let usuario = {
    nome: "",
    idade: "",
    temCnh: ""
};

// Ler o que o usuário digitou
process.stdout.write("Qual é o seu nome? \n");
process.stdin.on("data", function(data) {
    if (!usuario.nome) {
        usuario.nome = data.toString().trim();
        // Pedir para o usuário digitar sua idade
        process.stdout.write("Quantos anos você tem? \n");
    } else if (!usuario.idade) {
        usuario.idade = data.toString().trim();
        // Exibir uma mensagem personalizada com as informações do usuário
        process.stdout.write(
            "Olá " + usuario.nome + ", você tem " + usuario.idade + " anos. \n"
        );
        // Perguntar se possui CNH
        process.stdout.write("Você possui CNH? (Sim ou Não) \n");
    } else {
        // Ler a resposta
        usuario.temCnh = data.toString().trim().toLowerCase();
        // Exibir mensagem correspondente
        if (usuario.temCnh == "sim") {
            process.stdout.write(
                "Parabéns, " + usuario.nome + "! Você pode dirigir! \n"
            );
        } else {
            process.stdout.write(
                "Infelizmente, " + usuario.nome + ", você não pode dirigir. \n"
            );
        }
        console.log(usuario);
        // Encerrar o programa
        process.exit();
    }
});
