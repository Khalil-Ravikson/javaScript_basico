const notas = [10,8,7.5,9,8.5];


// Adciona mais um dado no array
// notas.push(5)

// Deleta um dado do array
notas.pop();

function AdcionaMedia(){
    const media =(notas[0], notas[1], notas[2], notas[3])/notas.length;  
    return console.log(`A Media é ${media}`); 
}

AdcionaMedia();

