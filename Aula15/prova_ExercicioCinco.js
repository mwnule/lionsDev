let numeros = [1, 2, 3, 4, 5]
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        soma += numeros[i]
    }
}

console.log(soma)

// O código cria um loop para somar todos os números pares existentes no array a cada repetição