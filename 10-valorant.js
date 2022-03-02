console.log("Compra no Valorant");

const agentes = new Array (

    "Sova",
    "Reyna",
    "Sage"
)

const sova = 4600
const reyna = 4500

const compraArmado = 3900
const totalParaCompraDeHabilidades = 1200
let agenteSelecionado = agentes[1]
const valorTotalDaCompra = totalParaCompraDeHabilidades + compraArmado

console.log("Lista de agentes")
console.log(agentes)

console.log("Agente Selecionado:", agentes[1])

const deuParaComprar = compraArmado + totalParaCompraDeHabilidades


if (agenteSelecionado == agentes[0]){
    console.log("Para fazer a compra do Sova é necessário", sova)
    console.log("O agente selecionado foi", agenteSelecionado, "assim com o", valorTotalDaCompra, "(valor maximo para compra do chamber, agente mais caro), sobra um total de", valorTotalDaCompra - sova)
}

if (agenteSelecionado == agentes[1]){
    console.log("Para fazer a compra do Reyna é necessário", reyna)
    console.log("O agente selecionado foi", agenteSelecionado, "assim com o", valorTotalDaCompra, "(valor maximo para compra do chamber, agente mais caro), sobra um total de", valorTotalDaCompra - reyna)
}