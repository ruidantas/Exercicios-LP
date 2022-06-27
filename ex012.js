const prompt = require("prompt-sync")()
console.clear()



// Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário: quantidade de vida de um monstro (entre 10 e 50) e valor do ataque do jogador por turno (entre 5 e 10). Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro (o jogador irá derrotar o monstro em 8 turnos).



let vidamonstro = +prompt('Digite o valor da vida do monstro: ')


while (vidamonstro < 10 || vidamonstro > 50)
{   console.clear()
    console.log('Valor inválido. Digite um número entrei 10 e 50.')
    vidamonstro = +prompt('Digite o valor da vida do monstro: ')

}

let ataquejogador = +prompt ("Digite o valor do ataque: ")

while (ataquejogador < 5 || ataquejogador > 10)
{
    console.clear()
    console.log('Valor inválido. Digite um número entre 5 e 10.')
    ataquejogador = +prompt ("Digite o valor do ataque: ") 
}

let turnos = vidamonstro/ataquejogador

console.log(`O jogador irá derrotar o monstro em ${turnos.toFixed(2)} turnos.`)