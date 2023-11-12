// concat (), concatena dois arrays em um novo array
const a = [1,2,3];
const b = [4,5,6];

const c = a.concat(b);

console.log(c);

// filter(), filtra os dados que passaram pelo LOP
const teste = ['1', '2', '3', '4', '123456'];

const resultado = teste.filter((word) => word.length >= 6);

console.log(resultado);

//find()
const words = ["Hello"," ","World"];

const result = words.find((word) => word.length >= 5);

console.log(result);

//sort(),reverse(),shift(),unshift() -> organiza, reversa, tira o primeiro, coloca o primeiro
console.log(a.reverse());
const d = a.sort();
console.log(d);

console.log(a.shift());
console.log(a);

console.log(a.unshift(1));
console.log(a);