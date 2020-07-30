



function naoCliqueaqui() {

var valor1,valor2,operacao,resultado
 
 valor1 = prompt("digite o valor1:") 
 valor2 = prompt("digite o valor2:") 
 operacao = prompt("Qual operação que voce deseja fazer? EX: +, -, *, /. ")

 if (operacao == "+") {
    resultado = parseInt(valor1) + parseInt(valor2)
     
 }else if (operacao == "-") {
     resultado = parseInt(valor1) - parseInt(valor2)
     
 }else if (operacao == "*") {
     resultado = parseInt(valor1) * parseInt(valor2)
        
 }else if (operacao == "/") {
     resultado = parseInt(valor1) / parseInt(valor2)
      } 
    if (resultado == parseInt(valor1) + parseInt(valor2)) {
  provaReal = resultado - parseInt(valor1)
} else if (resultado == parseInt(valor1) - parseInt(valor2)) {
  provaReal = resultado + parseInt(valor2)
} else if (resultado == parseInt(valor1) * parseInt(valor2)) {
  provaReal = resultado / parseInt(valor1)
} else if (resultado == parseInt(valor1) / parseInt(valor2)){
  provaReal = resultado * parseInt(valor2)
}
      document.getElementById("paragrafo").innerText = resultado + ":" + provaReal
 }