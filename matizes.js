const sala = ["Jota","Kevin","Gerson","Apocaliptica"];
const salaMedia = [10, 4.5, 9, 8];
const arrayDeDuasDimensoes = [sala,salaMedia];

console.log(`O aluno na posição 1 da sala, ${arrayDeDuasDimensoes[0][1]}
Tem a media: ${arrayDeDuasDimensoes[1][1]}`);

console.table(arrayDeDuasDimensoes);

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

console.log(funcionarios[0][0], funcionarios[1][0], funcionarios[2][0]);
console.table(funcionarios);

// So mais um teste
const funcionariosB = [
    ["Ana", "Juliana", "Leonardo"],
    [30, 35, 28]
  ];
  console.table(funcionariosB);