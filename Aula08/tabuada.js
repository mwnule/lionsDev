console.log("Informe um número")
    process.stdin.once("data", function(data) {
        tabuada = parseInt(data.toString().trim())
        for (let i = 1; i <= 10; i++) {
            console.log(i * tabuada)
        }
    process.exit();
});


