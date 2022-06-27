const prompt = require("prompt-sync")()
console.clear()

let nota1 = +prompt("Digite sua primeira nota: ")
let nota2 = +prompt("Digite sua segunda nota: ")

var media = (nota1 * 4 + nota2 * 6) / 10

console.log(`Sua média ponderada é: ${media}`)