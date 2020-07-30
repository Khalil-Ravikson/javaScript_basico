/*
itp,itn,A,B,C: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
escreval("Quantos numeros voce vai digitar")
leia(B)
A := 0
enquanto A < B faca
 escreval("digite o numero")
  leia(C)
   se C > 0 entao
    itp := itp + C
   senao
    itn := itn + C
   fimse
A := A + 1
fimenquanto
escreval(itp)
escreval(itn)
Fimalgoritmo

*/

var itp,itn,A,B,C;

function naoCliqueaqui(){


A = prompt("Digite Quantas vezes voce vai digitar?") 
B = 0
itp = 0
itn = 0
while ( B < A) {
    C = prompt("Digite o numero")   
 if (C > 0) 
    itp = parseInt(itp) + parseInt(C)
 else 
    itn = parseInt(itn) + parseInt(C)
 
 B++
}
 document.getElementById("paragrafo").innerText = (itp) + "/" + (itn)
}