const prompt = require("prompt-sync")()
console.clear()

// Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Em recuperação", se a média for entre cinco e sete;
// A mensagem "Reprovado", se a média for menor que cinco.


let nota1 = +prompt ('Insira a 1º nota: ')
let nota2 = +prompt ('Insira a 2º nota: ')
let nota3 = +prompt ('Insira a 3º nota: ')
let nota4 = +prompt ('Insira a 4º nota: ')
var media = (nota1 + nota2 + nota3 + nota4 ) / 4

if (media >= 7)
{
    console.log(`Você foi aprovado com média ${media}`)
}

else if (media >= 5)
{
    console.log (`Você foi para recuperação com média ${media}`)
}

else
{console.log(`Você foi reprovado com média ${media}`)}