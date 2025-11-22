//Não pode modificar o valor de uma constante
//NÂO UTILIZAR VAR, USAR CONST

const nome ='Meu nome'; // não da pra mudar
// nome = joão;     gera erro
console.log(nome);
/**
 * no caso se usar let ai sim pode mudar
 */

const primeiroNumero = 5;
const segundoNumero =10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);
let resposta = resultado * 2;
console.log(resposta);
resposta = resposta - 10;
console.log(resposta);

// para descobrir o tipo

console.log(typeof primeiroNumero);
console.log(typeof nome);

// soma de tips

console.log(primeiroNumero + segundoNumero);
console.log(primeiroNumero + nome);
console.log(typeof (primeiroNumero + nome));