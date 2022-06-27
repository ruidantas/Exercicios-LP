const prompt = require("prompt-sync")()
console.clear()

while (true) {
    console.clear()

     console.log('Bem vindo(a) á Naruto Air Lines')
     console.log('Gostaria de viajar?')
     let viajar = prompt()

     if (viajar == "sim") {
    console.log('OK, vamos apresentar algumas opções: ')
    console.log('Quanto você costuma gastar em viagens?')
      let valor = +prompt()
      if (valor >= 2000)
    {
        console.log('Que tal uma passagem para Konoha?')
    }

    else if (valor >= 1000)
    {
        console.log('Dá pra ir para Akatsuki')
    } else if (valor >= 100) {
        console.log('Da pra ir pra casa do caralho')
    }
    else 
    {
        console.log('Ai fica dificil né patrão. Que tal um netflix?')
    }


} else
{
    console.log('Que pena. mas tá bom.')
}


let sair = prompt('Deseja sair? ')
if (sair == "sim"){
    break
}



}