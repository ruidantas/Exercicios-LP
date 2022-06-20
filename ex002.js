const prompt = require("prompt-sync")()
console.clear()

// Exercício 4 - Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida

let nome = prompt ('Insira seu nome: ')
let opcao1 = ('Feijão com Arroz')
let opcao2 = ('Sushi')
let opcao3 = ('Batata Frita')

console.log(`\nAs opções de pratos disponiveis são:\n1- ${opcao1} \n2- ${opcao2} \n3- ${opcao3}`)

let escolha = prompt ("\nQual opção você prefere?: ")

while (escolha != 1 && escolha != 2 && escolha != 3) {
    console.log("Escolha uma opção válida.")
    escolha = prompt ("\nQual opção você prefere?: ")
}

if (escolha == 1)
{console.log(`\nVocê escolheu a opção: ${opcao1}`)}

if (escolha == 2)
{console.log(`\nVocê escolheu a opção: ${opcao2}`)}

if (escolha == 3)
{console.log(`\nVocê escolheu a opção: ${opcao3}`)}


