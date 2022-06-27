const prompt = require("prompt-sync")()
console.clear()

// EXERCICIO ARRAY 4
// Faça um programa que simule um lançamentoos  de dados. Lance o dado 100 vezes e armazene resultados em um array. Depois, mostre quantas vezes cada valor foi conseguido.


let dado = 0
let arraydado = []


    
console.log(dado)

for (let i = 1; i <= 100; i++){
dado = Math.floor(Math.random() * 6 + 1)
arraydado.push(dado)

}

console.log(arraydado)

for (let u = 1; u <= 100; u++){


    console.log(`Lançamento ${u} = ${arraydado[u]}`)
}