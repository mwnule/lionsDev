const limitador = 11; //o limitador limita o número até 10
const numeroAleatorio = Math.floor(Math.random() * limitador) //Math.floor é para arendondar o número para baixo, Math.random é para gerar um número aleatório de 0 a 1 (decimais)
let tentativas = 0 //contador do numero de tentativas

console.log("Fale um número aleatório entre 0 e 10")
process.stdin.on("data", function(data){
    let palpite = parseInt(data)
    if (palpite == numeroAleatorio) {
        console.log("Acertou!")
        process.exit()
    }
    else if (palpite != numeroAleatorio) {
        console.log("Você errou! Tente novamente.")
        tentativas++ //aumenta a cada tentativa do usuário
    }
    if (tentativas >= 3) { //caso o usuario tente tres vezes e não acerte, é eliminado
        console.log("Você perdeu.")
    }
})