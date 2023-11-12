const numPares = [2,4,6];
const numImpares =[1,3,5];
// Array Normal
// const num = [numImpares,numPares]
// O num fica -> [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]
// Array destruturado

const num = [...numImpares,...numPares];
// Sem o .sort() -> [ 1, 3, 5, 2, 4, 6 ]
num.sort();
// Com o .sort() -> [ 1, 2, 3, 4, 5, 6 ]
// console.log(num);

// const [num1,num2,outrosNum]=[1,2,3,4,5];
// console.log(num1,num2,outrosNum);
// retorna -> 1 2 3
const [num1,num2,...outrosNum]=[1,2,3,4,5];
console.log(num1,num2,outrosNum);
// retorna -> 1 2 [ 3, 4, 5 ];

// Metoidos para destruturar Objects 

const pessoa = {
    nome: "kha",
    idade: 21
}

const pessoaSexo = {
    ...pessoa,
    sexo:"M"
}

// console.log(pessoaSexo);
// Retorna -> { nome: 'kha', idade: 21, sexo: 'M' }

// atribuindo a uma constate um dado de um objeto.
const {sexo} = pessoaSexo;
console.log(sexo);
// Retorna -> M



// usando em Funções
function imprimeDados ({nome,idade,sexo}){
console.log(nome,idade,sexo);
}

imprimeDados(pessoaSexo);