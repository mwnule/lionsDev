let nome = "";

process.stdin.on("data", function(data) {
    
    nome = data.toString().trim();
    //toString converte o dado para string e trim retira os espaços em brancos

    console.log("Seu nome é " + nome + " e sua idade é " + idade);
    ; //console.log pode ser interpretado como stdout

    //process.exit() serve para que o código não fique rodando eternamente    
});