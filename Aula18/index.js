//  Valores primitivos e valores por referência

/**
 * primitivos (imutáveis)-> string, number, boolean, undefined,
 *  null (bigint, symbol) -> valores copiados
 * 
 * Referencia (mutável) -> array, object, function -> passado pro referencia
 */

let a = 'A';
let b = a;  // cópia quando o dado for primitivo
console.log(a, b);
a = 'qualquer coisa';
console.log(a, b);
console.log(' ');

let c = [1, 2, 3];
let d = c;  // passado por referencia os ddois estão referenciados no mesmo ponto de memória
console.log(c, d);
c.push(4);
console.log(c, d);
d.pop();
console.log(c, d);
console.log(' ');

let e = [1, 2, 3];
let f = [...e]; // valor foi copiado, portanto tem referencial da memória diferentes
console.log(e, f);
e.push(4);
console.log(e, f);
f.pop();
console.log(e, f);
console.log(' ');

const nome1 = {
    nome: 'Joana',
    sobrenome: 'Silva'
}
console.log(nome1);
const nome2 = nome1;    // mesmo referencia na memória
nome1.nome = 'João';
console.log(nome1);
console.log(nome2);

console.log(' ');

const nome3 = {
    nome: 'Alice',
    sobrenome: 'Silveira'
}
console.log(nome3);
const nome4 = {...nome3};    // copia, com referencial diferente
nome3.nome = 'Otavio';
console.log(nome3);
console.log(nome4);