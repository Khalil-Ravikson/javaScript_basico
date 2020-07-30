/*
Var
// Seção de Declarações das variáveis
valor01,valor02,resultado,teste: real
operacao: caractere

Inicio
// Quearo fazer uma operação aritmetrica no VisualG e comprova se esta correto

Escreval("digite o primero valor:")
leia(valor01)
escreval("digite a segunda nota:")
leia(valor02)
escreval("Qual operação que voce deseja fazer? EX: +, -, *, /. ")
leia(operacao)

Escolha operacao
       caso "+"
        resultado := valor01 + valor02
        teste := (resultado - valor01)

       caso "-"
        resultado := valor01 - valor02
        teste := (resultado + valor02)

       caso "*"
        resultado := valor01 * valor02
        teste := (resultado / valor02)

       caso "/"
        resultado := valor01 / valor02
        teste := (resultado * valor01)
        confirmacao := verdadeiro
fimescolha

escreval("o seu resultado: ",resultado," A sua prova real: ",teste)

Fimalgoritmo
*/



function naoCliqueaqui() {

var valor01,valor02,resultado, operacao

valor01 = prompt("digite o primeiro valor:");
valor02 = prompt("digite o segundo valor:");
operacao = prompt ("Qual operacao voce deseja fazer? EX: +,-,/,* ");


switch (operacao) {
    case "+":
        resultado = parseInt(valor01) + parseInt(valor02)
        break;
    case "-":
        resultado = parseInt(valor01) - parseInt(valor02)
        break;
    case "*" :
        resultado = parseInt(valor01) * parseInt(valor02)
        break;
    case "/" :
        resultado = parseInt(valor01) / parseInt(valor02)         
        break;
}

    document.getElementById("paragrafo").innerText = resultado

}





