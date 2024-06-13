//  Minha banda favorita é Deftones e a minha música favorita deles é Smile! :D

bandafavorita = ""
musicafavorita = ""

console.log("Qual é a sua banda favorita?");
    process.stdin.once("data", function(data){
        bandafavorita = data.toString().trim();
    console.log("Qual é a sua música favorita deles?");
        process.stdin.once("data", function(data){
            musicafavorita = data.toString().trim();
            console.log("Sua banda favorita é " + bandafavorita + " e sua música favorita deles é " + musicafavorita);
            process.exit();
        })
});