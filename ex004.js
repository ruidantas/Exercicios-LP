const prompt = require("prompt-sync")()
console.clear()

const presente = ("Boneco")
const valor = 100.98
const pgto = 150
console.log(`Presente: ${presente}
Valor do Presente R$ ${(valor).toFixed(2)}
Valor do Pagamento R$ ${(pgto).toFixed(2)}
Valor do Troco R$ ${(pgto-valor).toFixed(2)}`)