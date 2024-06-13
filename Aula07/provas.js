// let provas = []

// console.log("Qual a nota da sua primeira prova?")
//     process.stdin.once("data", function(data) {
//         let prova1 = parseInt(data);
//     console.log("Qual a nota da sua segunda prova?")
//         process.stdin.once("data", function(data) {
//             let prova2 = parseInt(data);
//         console.log("Qual a nota da sua terceira prova?")
//             process.stdin.once("data", function(data) {
//                 let prova3 = parseInt(data);
            
            
//             provas = [prova1, prova2, prova3]

//             const somatotal = prova1 + prova2 + prova3

//             const total = Number(provas)

//             let nota1 = prova1;
//            console.log(nota1) 
//            let nota2 = prova2;
//            console.log(nota2) 
//            let nota3 = prova3;
//            console.log(nota3)   
           
//            const geral = (nota1, nota2, nota3)
//            console.log(geral)

//             const media = somatotal / 3

//             const maiornumero = Math.max(geral)
//             console.log(maiornumero)

//             console.log("As notas das suas provas, são, respectivamente: " + provas)

//             });
//         }); 
//     });

let provas = [];

console.log("Qual a nota da sua primeira prova?");
process.stdin.once("data", function(data) {
    let prova1 = parseInt(data);
    
    console.log("Qual a nota da sua segunda prova?");
    process.stdin.once("data", function(data) {
        let prova2 = parseInt(data);
        
        console.log("Qual a nota da sua terceira prova?");
        process.stdin.once("data", function(data) {
            let prova3 = parseInt(data);
            
            provas = [prova1, prova2, prova3];
            
            const somatotal = prova1 + prova2 + prova3;
            
            const media = somatotal / 3;
            
            console.log("As notas das suas provas, são, respectivamente: " + provas);
            console.log("A média das suas notas é: " + media);
            
            const maiorNota = Math.max(...provas);
            const menorNota = Math.min(...provas);
            console.log("A maior nota é: " + maiorNota);
            console.log("A menor nota é: " + menorNota);
            
            process.exit(); // Isso encerra o processo do Node.js
        });
    });
});




