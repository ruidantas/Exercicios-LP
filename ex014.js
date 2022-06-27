const prompt = require("prompt-sync")()
console.clear()

// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';
// CASO SEJA DIFERENTE REPITA



let nome = prompt('Digite seu nome: ')

while (nome.length < 3)
{   console.clear()
    console.log('NOME INVÁLIDO.')
    nome = prompt('Digite seu nome: ')

}

let idade = +prompt('Digite sua idade: ')
while (idade <= 0 || idade > 150)
{   console.clear()
    console.log('IDADE INVÁLIDA.')
    idade = +prompt('Digite sua idade: ')
    
}

let salario = +prompt('Digite seu salário: ')
while (salario <= 0)
{   console.clear()
    console.log('SALÁRIO INVÁLIDO.')
    salario = +prompt('Digite seu salário: ')
}

let estadocivil = prompt('Digite seu estado civil: ')
while (estadocivil != "s" && estadocivil != "c" && estadocivil != "v" && estadocivil != "d")
{ console.clear()
    console.log('ESTADO CIVIL INVÁLIDO.')
    estadocivil = prompt('Digite seu estado civil: ')

}

console.log(`Seu nome é: ${nome} \nSua idade é: ${idade} \nSeu salário é: R$${salario} \nSeu estado civil é: ${estadocivil}`)