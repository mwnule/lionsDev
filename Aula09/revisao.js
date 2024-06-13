const aluno = [
    {nome: "igor", idade: 16, contato: "(42 95458-5885)"},
    {nome: "felipe", idade: 18, contato: "(42 95458-5885)"},
    {nome: "ana", idade: 30, contato: "(42 95458-5885)"},
    {nome: "pedro", idade: 42, contato: "(42 95458-5885)"}
]
aluno.forEach(function(item, index, array) {
    if (item.idade >= 18) {
        console.log(`${item.nome} é maior de idade`)
    }
    else {
        console.log(`${item.nome} é menor de idade`)
    }
});