/*
algoritmo "medidor do coefiente de viadagem"
var
nome: caractere
vf, r1, r2, r3, r4, r5: inteiro
inicio
escreval ("qual é o nome do corno?")
leia (nome)
escreval ("responda essas perguntas e saiba seu nivel de viadagem!")
escreval (" Quando você esté em casa só, assiste:")
escreval (" a)", "filme")
escreval (" b)", "serie")
escreval (" c)", "documentario")
escreval (" d)", "jogo")
escreval (" e)", "jornal")
escreva ("resposta:")
leia (r1)
se r1 = "a" entao
r1 <- 20
se r1 = "b" entao
r1 <- 15
se r1 = "c" entao
r1 <- 10
se r1 = "d" entao
r1 <- 5
senao r1 = "e" entao
r1 <- 0
fimse
escreval ("Você tem uma playlist com apenas cinco músicas e vai viajar, porém só pode ouvir uma música durante toda viagem")
escreval (" a)", " Ela se partiu ")
escreval (" b)", "Orgia de traveco ")
escreval (" c)", " Disk me - Pabllo Vittar ")
escreval (" d)", " Medley da gaiola ")
escreval (" e)", "Zero - Liniker")
escreva ("resposta:")
leia (r2)
se r2 = "a" entao
r2 <- 10
se r2 = "b" entao
r2 <- 15
se r2 = "c" entao
r2 <- 20
se r2 = "d" entao
r2 <- 0
senao r2 = "e" entao
r2 <- 20
fimse
escreval (" Andando pela rua, você vê de longe seu pai com uma suposta amante, você:")
escreval (" a)", "  Deixa ele te ver e saber que tu sabe")
escreval (" b)", " Repara nas pernas da mulher ")
escreval (" c)", " Tira várias fotos pra suborná-lo")
escreval (" d)", " Sai correndo e começa chorar ")
escreval (" e)", "  Conta pra sua mãe")
escreva ("resposta:")
leia (r3)
se r3 = "a" entao
r3 <- 5
se r3 = "b" entao
r3 <- 0
se r3 = "c" entao
r3 <- 5
se r3 = "d" entao
r3 <- 20
senao r3 = "e" entao
r3 <- 15
fimse
escreval ("Você entra num banheiro e os mictórios são MUITO próximos, chega um cara e usa o que tá bem do teu lado. Então você:")
escreval (" a)", " Continua o xixi sem olhar pros lados  ")
escreval (" b)", " Disfarça e dá uma observada no pau do cara")
escreval (" c)", " Olha só pra comparar os tamanhos ")
escreval (" d)", " Encara o homem e da um sorriso.")
escreval (" e)", "Guarda o pau e vai embora")
escreva ("resposta:")
leia (r4)
se r4 = "a" entao
r4 <- 0
se r4 = "b" entao
r4 <- 20
se r4 = "c" entao
r4 <- 20
se r4 = "d" entao
r4 <- 20
senao r4 = "e" entao
r4 <- 5
fimse
escreval ("Você vai num restaurante e analisa o seguinte cardápio para escolher:")
escreval (" a)", " Macarronada. ")
escreval (" b)", "  Feijoada.")
escreval (" c)", "  Inhoque de mandioca. ")
escreval (" d)", " Uma linguiça grande. ")
escreval (" e)", "  Escondidinho de carne.")
escreva ("resposta:")
leia (r5)
se r5 = "a" entao
r5 <- 5
se r5 = "b" entao
r5 <- 0
se r5 = "c" entao
r5 <- 20
se r5 = "d" entao
r5 <- 20
se r5 = "e" entao
r5 <- 15
fimse
vf <- (r5 + r4+ r3+ r2+ r1)
leia (vf)
se r1 = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 entao
escreval ("parabens ",nome," você é muito hetero")
se r2 =21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,38, 39, 40  entao
escreval ("hsdfasfshgjgdhjuhg")
se r3 = 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60 entao
escreval ("resposta3")
se r4 = 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80 entao
escreval ("resposta4")
se r5 = 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 9, 96, 97, 98, 99, 100 entao
escreval ("resposta5")
fimse
fimalgoritmo
*/