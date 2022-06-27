const prompt = require("prompt-sync")()
console.clear()

// Exerício 2 - Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo e implemente a funcionalidade de não aceitar o número 0.

let num = +prompt  ("Digite um número: ")

while (num == 0)
{
     console.clear()
    console.log('DIGITE UM NÚMERO VÁLIDO')
    num = +prompt  ("Digite um número: ")
}

if (num > 0)
{
    console.log(`\no numero ${num} é positivo`)
}
 else
 {
     console.log(`\no numero ${num} é negativo`)
 }