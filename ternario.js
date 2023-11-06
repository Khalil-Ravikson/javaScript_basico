const idadeMinima = 18;
const idadeCliente = 12;

/*
if (idadeCliente === idadeMinima === false || idadeCliente <= 0) {
    console.error("Idade Irreal")
}
else if (idadeCliente >= idadeMinima) {
    console.log("Idade Aprovada")
} else {
    console.log("Idade Reprovada")
}
*/ 
console.log(idadeCliente>=idadeMinima ? "Idade aprovada" : "Idade Recusada")

// Mais um exemplo de template Scripts + operadores Ternarios
const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";
// template Scripts ${} - Operadores ternarios (?,:) 
const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)
