const prompt = require("prompt-sync")()
console.clear()

// Exercício 2 - Faça um programa que vai receber como parâmetro o ano de nascimento de uma pessoa, retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições



let anonasc = +prompt("Digite o ano que você nasceu: ")

var idade = (2022 - anonasc)

if (idade >= 18)
{
    console.log(`Sua idade é ${idade} e seu voto é obrigatório:`)
}

else if (idade <= 16)
{
    console.log(`Sua idade é ${idade} e seu voto é opcional:`)
}

else
{console.log(`Sua idade é ${idade} e seu voto não é obrigatório: `)}