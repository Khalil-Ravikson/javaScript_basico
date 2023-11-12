const sala = ["Jota","Kevin","Gerson","Apocaliptica"];
const salaMedia = [10, 4.5, 9, 8];
const arrayDeDuasDimensoes = [sala,salaMedia];



function exibeAlunoEMedia(aluno){
if(arrayDeDuasDimensoes[0].includes(aluno)){ 
    // const indice = arrayDeDuasDimensoes[0].indexOf(aluno);

    const [alunos, medias] = arrayDeDuasDimensoes;
    const indice = alunos.indexOf(aluno);
    const mediaDoAluno = medias[indice];
    console.log(`O Aluno -> ${aluno}, tem media -> ${mediaDoAluno}`)
    }else{
        console.log("Aluno não encontrado");
    }
}

exibeAlunoEMedia("Jota"); 