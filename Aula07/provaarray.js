let provas = [];

console.log("Qual a nota da sua primeira prova?");
process.stdin.once("data", function(data) {
    let prova1 = Number(data.toString().trim());
    provas.push(prova1)
    
    console.log("Qual a nota da sua segunda prova?");
    process.stdin.once("data", function(data) {
        let prova2 = Number(data.toString().trim());
        provas.push(prova2)
        
        console.log("Qual a nota da sua terceira prova?");
        process.stdin.once("data", function(data) {
            let prova3 = Number(data.toString().trim());
            provas.push(prova3)

        let resultado = ((provas[0] + provas[1] + provas[2]) / 3)
        console.log("A média da nota das suas provas é " + resultado)

        const maiorNota = Math.max(...provas);
        const menorNota = Math.min(...provas);
        console.log("A maior nota é: " + maiorNota);
        console.log("A menor nota é: " + menorNota);
        
        process.exit();

        });
    });
});