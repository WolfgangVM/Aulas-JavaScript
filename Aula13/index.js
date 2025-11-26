// Objeto Math

let num1 = 9.54578;
let num2 = Math.floor(num1);    //arredonda para baixo

console.log(num2);
let num3 = Math.ceil(num1);     //arredonda pra cima
console.log(num3);

let num4 = Math.round(num1);    //arredonda de acordo com a referencia se 
                                // o final 5 ou mais arredonda para cima caso contrario para baixo
console.log(num4);

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));  //pega o maior numero da lista
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));  // pega o menor item da lista

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //gera um numero aleatório emtre 5 e 10 inteiro(arredondado pelo round)
console.log(aleatorio);

console.log(Math.PI);


//exponenciação
console.log(Math.pow(2, 10));
console.log(2 ** 10);   // mais facil de usar

//raiz quadrada
let num5 = 9;
console.log(num5 ** (1/2));
console.log(num5 ** 0.5);


// Obs. em javascript vc pode dividir um numero por 0; Isso é um erro 
// é nessecario ficar atento. Oresultado é mostrado como Infinity.
console.log(100/0.0000000000);