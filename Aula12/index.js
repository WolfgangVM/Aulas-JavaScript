// Numbers

let num1 = 150.10551489625;
let num2 = 20.5;
console.log(num1.toString() + num2); // durante essa linha num1 vira uma string
console.log(typeof num1);

//  num1 = num1.toString(); // nesse caso o valor da variavel é transformada para string
//  console.log(typeof num1);

console.log(num1.toString(2)); // o valor é exibido em binario

console.log(num1.toFixed(2));   //arredonda os valores

console.log(Number.isInteger(num1)); // verifica se o numero é inteiro

let temp = num1 * 'ola';
console.log(Number.isNaN(temp)); // verifica se a conta NÃO é valido 

// IEEE 754-2008 padrão de precisão do javascript

let num3 = 0.7;
let num4 = 0.1;
console.log(num3 + num4);

num3 +=num4;
num3 +=num4;
num3 +=num4;
console.log(num3);
num3 = parseFloat(num3.toFixed(2)); // para resolver o problema de imprecisao do jascript
console.log(num3);
// outra forma de resolver o problema de casas decimais é 
// multiplicar para tornar os numeros em inteiros  e no 
// final dividir para retornar a escala 