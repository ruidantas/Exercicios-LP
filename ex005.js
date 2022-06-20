const prompt = require("prompt-sync")()
console.clear()

// Exercício 7 - Você está na flor da idade?
// Defina uma variável para o valor do ano do nascimento;
// Defina uma variável para o valor do ano atual;
// Defina uma variável que calcula o valor final da idade da pessoa;
// Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".

let anonasc = +prompt("Digite seu ano de nascimento: ")


while (anonasc <= 1900)
{   console.log("ANO INSERIDO INVALIDO")
    console.clear()
    anonasc = +prompt("Digite seu ano de nascimento: ")}

let anoatual = +prompt("Digite o ano atual: ")

while (anoatual != 2022)
{   console.clear()
    console.log("ANO INSERIDO INVALIDO")
    anoatual = +prompt("Digite o ano atual: ")
}

console.log(`Você tem ${anoatual - anonasc} anos e está na flor da idade`)