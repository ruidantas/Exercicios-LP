const prompt = require("prompt-sync")()
console.clear()



while (true){



let nome = prompt('Digite seu nome: ')

if (nome.length < 3)
{   console.clear()
    console.log('NOME INVÁLIDO.')
    nome = prompt('Digite seu nome: ')

}

let idade = +prompt('Digite sua idade: ')
if (idade <= 0 || idade > 150)
{   console.clear()
    console.log('IDADE INVÁLIDA.')
    idade = +prompt('Digite sua idade: ')
    
}

let salario = +prompt('Digite seu salário: ')
if (salario <= 0)
{   console.clear()
    console.log('SALÁRIO INVÁLIDO.')
    salario = +prompt('Digite seu salário: ')
}

let estadocivil = prompt('Digite seu estado civil: ')
if (estadocivil != "s" && estadocivil != "c" && estadocivil != "v" && estadocivil != "d")
{ console.clear()
    console.log('ESTADO CIVIL INVÁLIDO.')
    estadocivil = prompt('Digite seu estado civil: ')

}

console.log(`Seu nome é: ${nome} \nSua idade é: ${idade} \nSeu salário é: R$${salario} \nSeu estado civil é: ${estadocivil}`)

let sair = prompt('Deseja sair? ')
if (sair == 'sim')
break
}