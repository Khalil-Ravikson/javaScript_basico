/*escreval("Qual a porra do teu nome ó caralho?")
    leia(aluno)
     escreval("Qual a tua nota rapa?")
      leia(nota1)
       escreval("qual a tua segunda nota filho da puta?")
        leia(nota2)
         escreval("A tua media será:")
          media <-(nota1 + nota2)/ 2
           escreval(media)
            escreval("calculando se passou nessa bosta.....")
             escreval ("foi dado o veredito")
              se media < (7) entao
               escreval("aluno ta fudido na recuperação")
                senao
                 escreval("aluno tu é foda")
                  fimse*/
 var nome, nota1, nota2, nota3,disciplina,turma, media;
    
 nome=prompt("Digite o nome do aluno:");
 turma=prompt("Digite a turma do aluno:");
 disciplina=prompt("Digite a disciplina do aluno:");
 nota1 = parseInt(prompt("Digite a primeira nota:"));
 nota2 = parseInt(prompt("Digite a segunda nota:"));
 nota3 = parseInt(prompt("Digite a terceira nota:"));
 media = (nota1 + nota2 + nota3)/3;
 if (media>=7)
 {
 document.write ("Aluno Aprovado!"+nome+"/"+turma+"/"+disciplina+"/" +media)
 }
 else {
 document.write ("Aluno Reprovado! "+nome+ "/" +turma+ "/" +disciplina + "/" +media)
 }