//filtrando o array
// filter, map, reduce
// fiilter -> sempre retorna um array, com a mesma quantidade de elemnetos ou menos.
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
/*
function callbackFilter(valor){
    return valor > 10;
    }
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
*/
/*
const numerosFiltrados = numeros.filter( valor => valor > 10 );
console.log(numerosFiltrados);
*/
/*
const numerosFiltrados = numeros.filter( (valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10;
} );
console.log(numerosFiltrados);
*/

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasComMaiorIdade = pessoas.filter(obj => obj.idade >= 50);
console.log(pessoasComMaiorIdade);

const nomeTerminaComA = pessoas.filter( obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);