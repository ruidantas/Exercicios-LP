const prompt = require("prompt-sync")()
console.clear()

// Exercício 5 - Reajuste salarial: As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.

let salario = +prompt("Digite o seu salário: ")
let aumento = 0

if (salario > 280)
{aumento = 0.15}

else if ( salario > 700)
{ aumento = 0.10}

else if (salario > 1500)
{aumento = 0.05}

else 
{aumento = 0.20}

console.log(`o seu salário antes do reajuste: ${salario} \n a % de aumento será: ${aumento * 100}%\n o valor do aumento será: ${salario * aumento} \nO novo salário será: ${salario * aumento + salario}`)
