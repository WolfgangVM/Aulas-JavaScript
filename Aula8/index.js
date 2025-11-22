// operadores

/*  aritiméticos 
*   +   ( adição, concatenação)
*    -  (subtração)
*    /  (divisão)
*    *  (multiplicação)
*    ** (exponenciação)
*    % (resto da divisão)
*/

const num1 = 5;
const num2 = parseInt('10'); // converte para um numero inteiro "int"
//  caso na conversão for um numero quebrado "float' usa se o, parseFloat();
//  tambem pode ser feito, number();
console.log(num1 + num2);

console.log(num1 * num2);

console.log(num1 - num2);

console.log(num1 / num2);

console.log(num1 ** num2);

console.log(num1 % num2);

const num3 = 2;

console.log(num1 + num2 * num3);
console.log((num1 + num2) * num3);

//contador
// ++ (Incremento)
// -- (decremento)
let contador =1;
console.log(contador);
contador++; // boasa praticas dessa forma
console.log(contador);
++contador; // dessa forma a ordem não faz diferença na hora de mostrar
console.log(contador);

console.log(contador++); // mostra valor depois soma

console.log(contador);

console.log(++contador); // soma depois mostra

console.log(--contador); // decremento "--"

const step =2;
let soma = 0;
soma = soma + step; 
console.log(soma);
soma  +=step;
console.log(soma);

soma *= step;
console.log(soma);

soma **= step;
console.log(soma);