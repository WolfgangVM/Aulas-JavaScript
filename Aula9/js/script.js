// Exercicio

//let num1 = parseFloat(prompt('Digite um numero:'));       * alternativas
//let num2 = Number( prompt('Digite outro numero:'));       * de escrição


let num1 = prompt('Digite um numro:');
let num2 = prompt('Digite outro numero:');
num1 = Number(num1);
num2 = Number(num2);

let resultado = num1 + num2;

alert(`O resultado da soma é: ${resultado}`);


//alternativa
//                                  *       *
// alert(`O resultado da soma é: ${num1 + num2}`); 
// * não recomendado para codigos mais complexos