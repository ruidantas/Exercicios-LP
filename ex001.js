const prompt = require("prompt-sync")()
console.clear()

// Exercício 2 - Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira



let nome = prompt ("Digite seu nome completo: ")
let endereco = prompt ("Digite seu endereço: ")
let tel = +prompt ("Digite seu telefone: ")
let cep = +prompt ("Digite seu CEP: ")

console.log(`Seu nome é: ${nome} \nSeu endereço é: ${endereco} \nSeu CEP é: ${cep} \nSeu telefone é: ${tel}`)