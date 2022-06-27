const prompt = require("prompt-sync")()
console.clear()

// Exercício 3 - Faça um programa que peça dois números, imprima o maior deles ou imprima "Números iguais" se os números forem iguais.

let num1 = +prompt ('Insira um número: ')
let num2 = +prompt (' Insira um segundo número: ')

if (num1 > num2)
{console.log(`o numero ${num1} é maior`)}

else if (num2 > num1)
{console.log(`o numero ${num2} é maior`)}

else
{console.log(`${num1} e ${num2} são iguais.`)}