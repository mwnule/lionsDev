let coresFavoritas = ["Preto", "Rosa", "Azul"];
let coresEspeciais = [];

console.log(6 / coresFavoritas.length)

console.log("Qual a sua cor favorita?")
process.stdin.once("data", function(data) {
    corDoUsuario = data.toString().trim().charAt(0).toUpperCase() + data.toString().slice(1).trim();
    coresEspeciais.push(corDoUsuario)
    if (coresFavoritas.includes(corDoUsuario)) {
        console.log("Sua cor favorita está incluídas nas cores favoritas da turma! \n")
    }
    else {
        console.log("Não conhecia essa cor. Vamos inclui-la nas cores favoritas da turma! \n")
        coresFavoritas.push(coresEspeciais)
    }

    console.log("As cores favoritas da turma são " + coresFavoritas + ", o que totaliza " + coresFavoritas.length + " cores.")
    
    
});

