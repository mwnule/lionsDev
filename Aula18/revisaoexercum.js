const limitador = 11;
let arrayNumeroAleatorio = []

for (let i = 1; i <= 10; i++) {
    var numeroAleatorio = Math.floor(Math.random() * limitador)
    arrayNumeroAleatorio.push(numeroAleatorio);
}

for (i = 0; i < arrayNumeroAleatorio.length; i++) {
    console.log(arrayNumeroAleatorio[i])
    if (i % 2 == 0) {
        i
    }
}







// Tarefas:
// - contar quais numeros sao pares e impares
// - Arma