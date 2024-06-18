let escala = "";
let temperatura;

console.log("Primeiramente escolha a escala de origem: Celsius (C), Fahrenheit (F) ou Kelvin (K)")
    process.stdin.once("data", function(data) {
        escala = data.toString().toLowerCase().trim()
            console.log("Fale uma temperatura na escala de origem informada")
                process.stdin.once("data", function(data) {
                    temperatura = parseFloat(data)
                    console.log(typeof(temperatura))
                    if (escala === "f") {
                        let conversorFparaC = (temperatura - 32) / 1.8
                        console.log(conversorFparaC)
                    }
                    else {
                        console.log("vixi")
                    }
                });             
    });


// Fahrenheit (F)
// - Converter para Celsius (C)
// - Converter para Kelvin (K)

// Celsius (C)
// - Converter para Kelvin (K)
// - Converter para Fahrenheit (F)

// Kelvin (K)
// - Converter para Celsius (C)
// - Converter para Fahrenheit (F)