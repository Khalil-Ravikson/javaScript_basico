const sala = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']
const salaB = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

// uasndo Slice() function
 
const sala1 = sala.slice(0,sala.length/2)
const sala2 = sala.slice(sala.length/2)

console.log(sala1);
console.log(sala2);

//usando O Splice() function -> como parametros usamos como
// inicio, um elemento do array e em seguidas a partir desse inicio quantos eleemtos vamos remover
// Podemos adcionar em seguida novos elemetos no array. 

salaB.splice(0,3,"Vinícius","Lucas","Jota");
salaB.splice(3,20, "Gerson","Abgail");
console.log(salaB);


