
var limite, idade,nome, contador;

function naoCliqueaqui(){

limite = prompt("quantas pessoas vão participar?")
contador = 0

while (contador < limite) {
   nome = prompt("Qual o seu nome:")   
   idade = prompt("digite a idade de: ", nome, ":")
   if (idade > 18) 
         document.getElementById("paragrafo").innerText = nome + " voce e maior de idade"
   else 
         document.getElementById("paragrafo").innerText = nome + " voce e menor de idade"
 
   contador++
}




















}