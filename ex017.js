const prompt = require("prompt-sync")()
console.clear()

// Exercicio ARRAY
// Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores



let numeros = +prompt('Digite 20 números inteiros.')
let array = []
let arraypar = []
let arrayimpar = []

for (let i = 0; i  < 20; i++){
    // numeros = +prompt('Digite 20 números inteiros: ')
    array.push(i)
    if (i % 2 == 0) {
       arraypar.push(i) 
    }

    else 
    {
        arrayimpar.push(i)
    }
}

console.log(array)
console.log(arraypar)
console.log(arrayimpar)