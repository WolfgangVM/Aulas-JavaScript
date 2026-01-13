// Mapeando o array

// dobrar os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

// 

const pessoas =[
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);
//   para tornar possivel simplificar é preciso tornar udo uma expreção dentro do parenteses depois dentro do colchetes, para não gerar erro
const idades = pessoas.map(obj => ({idade: obj.idade }));
console.log(idades);

const comID = pessoas.map(function(obj, indice){
    const newObj = { ...obj};   // para não alterar o obj original se cria umm novo objeto
    newObj.id = indice;         // em seguida se trabalha em cima do novo objeto, mantendo o original sem alteração
    return newObj;
});
console.log(comID);
console.log(pessoas);