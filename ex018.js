const prompt = require("prompt-sync")()
console.clear()

// EXERCICIO ARRAY 2
// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura

let idade = 0
let altura = 0

let idadadearray = []
let alturaarray = []

let mediaaltura = 0
let mediaidade = 0
let somaidade = 0
let somaaltura = 0



for (let i = 0; i < 5; i++){
    idade = +prompt('Qual sua idade?')
     altura = +prompt('Qual sua altura?')
    idadadearray.push(idade)
     alturaarray.push(altura)

}

console.log(idadadearray)
console.log(alturaarray)

for (let n of idadadearray){
    somaidade += n  // mesma coisa de; somaidade = somaidade + n
    
}

for (let b of alturaarray) {
    somaaltura += b 
    
}



mediaidade = somaidade / idadadearray.length
mediaaltura = (somaaltura / alturaarray.length).toFixed(2)

console.log(` A média das idade é: ${mediaidade}`)
console.log(`A média das alturas é: ${mediaaltura}`)