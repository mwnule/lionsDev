console.log("Você gosta de café?")
    process.stdin.once("data", function(data) {
    resposta = data.toString().trim().toLowerCase();
        if (resposta === "sim") {
            console.log("Respeito sua opinião, mas café é ruim :P")
        }
        else if (resposta === "talvez") {
            console.log("Indeciso, então?")
        }
        else if (resposta === "não") {
            console.log("Quanto bom gosto!\n")
        }
        else {
            console.log("Resposta inválida")
        }
        process.exit();
    });