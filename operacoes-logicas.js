/*Var
// Seção de Declarações das variáveis
   nota1, nota2, media: real
   aluno: caractere
   passou: logico
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
passou := verdadeiro
   escreval("Qual a porra do teu nome ó caralho?")
    leia(aluno)
     escreval("Qual a tua nota rapa?")
      leia(nota1)
       escreval("qual a tua segunda nota filho da puta?")
        leia(nota2)
         escreval("A tua media será:")
          media <-(nota1 + nota2)/ 2
           escreval(media)
            se media >= 50 entao
              passou := falso
            fimse

            se passou e media >= 50 entao
             escreval ("aprovado")
            senao
             escreval("reprovado")
            fimse
fimalgoritmo*/




var nota1, nota2, media, aluno,passou;

passou = false;
aluno = prompt("qual o teu nome?");
nota1 = parseInt(prompt("digite sua nota:"));
nota2 = parseInt(prompt("digiti a segunda nota:"));
media = (nota1 + nota2)/2; 
alert("sua media:" + media + "fdp");
 

if (media >= 50 ) 
     passou = true;
 
 if (passou && media >= 60)
 alert("aprovado");  
 else {
     alert("reprovado");}
     
 