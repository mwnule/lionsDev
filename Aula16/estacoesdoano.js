
console.log("Fale um mês do ano")
process.stdin.on("data", function(data) {
    mesdoano = data.toString().toLowerCase().trim();
    switch (mesdoano) {
        case "janeiro":
            console.log("É verão!")
        case "fevereiro":
            console.log("É verão!")
            break;   
        case "março":
            console.log("É outono!")
        case "abril":
            console.log("É outono!")
        case "maio":
            console.log("É outono!")
        case "junho":
            console.log("É outono!")
            break;   
        case "julho":
            console.log("É inverno!")
        case "agosto":
            console.log("É inverno!")  
        case "setembro":
            console.loh("É inverno!") 
            break;
        case "outubro":
            console.log("É primavera!")
        case "novembro":
            console.log("É primavera!")  
        case "dezembro":
            console.log("É primavera!") 
            break;                                     
    }
    process.exit()
})