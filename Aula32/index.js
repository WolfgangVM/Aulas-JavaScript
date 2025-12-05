// aatribuição, arrays
/*
let a = 'A';
let b = 'B';
let c = 'C';
console.log(a, b, c);

const numeros = [b, c, a];
[a, b, c] = numeros;
console.log(a, b, c);
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);
//... rest, ...spread
const [um, ,tres, ,cinco] = numeros;
console.log(um, tres, cinco);

const listArray =[
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
];
console.log(listArray[1][2]);
const [lista1, lista2, lista3] = listArray;
console.log(lista3[2]);

