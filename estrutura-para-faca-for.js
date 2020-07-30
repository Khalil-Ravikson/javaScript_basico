/* 
Var
// Seção de Declarações das variáveis 
  numero, fatorial, contador : inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
  escreval("Digite O numero que voce quer o fatorial:")
  leia (numero)
  fatorial := 1
  para contador de 1 ate numero faca
       fatorial := fatorial * contador
  fimpara
  
  escreval("o seu numero é:", numero ," e o fatorial: ", fatorial)
*/
function naoCliqueaqui() {

var numero, fatorial

numero = prompt("digite um numero para achar o seu fatorial:")
fatorial = 1

for (var contador = 1; contador <= numero; contador++) 
    { fatorial = fatorial * contador }; 
    
    document.getElementById("paragrafo").innerText = "o seu numero é:" + numero + " e o fatorial: " + fatorial
}







