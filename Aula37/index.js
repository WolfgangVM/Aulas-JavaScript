// for in -> lê os índeces ou chaves do objeto

const frutas = ['Pera', 'Maça', 'Uva'];

for (let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Wolfgang',
    sobrenome: 'Manzato',
    idade: 31
};

for (let chave in pessoa){
//   console.log(chave);
    console.log(chave, pessoa[chave]);
}