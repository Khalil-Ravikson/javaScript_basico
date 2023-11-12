// use o for of para pecorrer array ja definidos.


// const num = [1,2,3,4,5]

// for (const iterator of num) {
//     console.log(iterator);
// }


// media com for of

const notas = [10,8,7];
let soma = 0;

for (let elemento of notas) {
    soma += elemento;
}

let media = soma/notas.length
console.log(media);


// array de numeros pares com For 

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);