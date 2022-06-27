const prompt = require("prompt-sync")()
console.clear()


// EXERCICIO ARRAY 3
// Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.

let qtdalunos = +prompt('Digite a quantidade de alunos que deseja cadastrar: ')
let notaarray = []
let nomearray = []
let somanotas = 0
let medianotas = 0



for (let i = 1; i <= qtdalunos; i++) {
    let nome = prompt("Digite o nome dos alunos: ")
    nomearray.push(nome)
    let nota = +prompt ("Digite a nota do aluno: ")
    notaarray.push(nota)

}

for (let j of notaarray  ) {
    somanotas += j
   
}

medianotas = somanotas / qtdalunos

console.log(`a media das notas é ${medianotas.toFixed(2)}`)
console.log(nomearray)
console.log(notaarray)

for (let u = 0; u < qtdalunos; u++ ) {
    console.log(` Aluno: ${nomearray[u]}`)
    console.log(`Nota: ${notaarray[u]}`)
}
console.log(`Media total das notas é ${medianotas.toFixed(2)}`)