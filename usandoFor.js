// const numeros = [100, 200, 300, 400, 500, 600];

// for(let i = 0; i <numeros.length;i++){
//     console.log(numeros[i]);
// }

// const notas =[5,6,7.5,10];

// let soma = 0;
// let media = 0;

// for (let i = 0; i < notas.length; i++) {
//     soma += notas[i];
//     if (i == notas.length -1 ) {
//         media = soma/notas.length;

//     }
// }
// console.log(soma,"----", media);



// Pecorrendo uma matriz 

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3] //  ->[10 , 6.5, 8 ,7.5]
                                            // ->[9  , 6  , 6]
                                            // ->[8.5, 9.5]
 
let media = 0


for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      media += notasGerais[i][j]/notasGerais[i].length;
    }
  }
  media = media/notasGerais.length
  console.log(media)

