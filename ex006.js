const prompt = require("prompt-sync")()
console.clear()

// Exercicio 1- Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
// Crie uma variável para receber o valor, com conversão para inteiro
// Para um número ser par, a divisão dele por 2 tem que dar resto 0

let num = +prompt ("Digite um número: ")

if (num % 2 == 0 )
{
    console.log(`o numero ${num} é par`)
}

else {
    console.log(`o numero é ${num} é impar`)
}