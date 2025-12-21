// Parametros de função

function funcao(){
    let total =0;
    console.log('Oi');
    console.log(arguments); //arguments que sustentam todos os argumentos enviados
    for (let argumentos of arguments){
        total += argumentos;
    }
    console.log(total); // para a realizar a soma não pode ter strings, 
                        // caso tenha sera considerado tudo como string
}
funcao(1, 2, 3);
console.log(' ');
function soma (a, b, c = 0){    // tambem é poossivel " (a, b = 2)" para caso b não tenha um valor, 
                                // assim b tem um valor inicial mesmmoo sem recever um valor
    b =b || 0;                  // caso não tenha valor ambas as variaveis o resultao sera NaN
    console.log(a + b + c);
}
soma(2);
soma(2, undefined, 3);  // unica forma de b se manter sem alteração é sando undefined,
                        //  null substitui então não funciona

console.log(' ');

function pessoa({nome, sobrenome, idade }){
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Wolfgang', sobrenome: 'Manzato', idade: 30 };
pessoa(obj);    // tambêm é possivel por direto

console.log(' ');

function valorAr([valor1, valor2, valor3 ]){
    console.log(valor1, valor2, valor3);
}
valorAr(['Wolfgang', 'Manzato', 30]); 

console.log(' ');

function conta(operador, acumulador, ...numeros){   // os tres pontos e o nome representam o resto e por isso devem ser a ultima declaração
    //  console.log(operador, acumulador, numeros);
    for (let numero of numeros){
       //   console.log(numero);
       //   console.log(arguments)   // arraw function não tem argumentos '=>'
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log (acumulador);
}
conta('*',1 , 20, 30, 40, 50);
conta('+',1 , 20, 30, 40, 50);
conta('*',1 , 20, 30, 40, 50);
conta('/',1 , 20, 30, 40, 50);

console.log(' ');

//arraw function
const valores =(...args) => {   // precisa dos três pontos
    console.log(args);
}
valores('+',1 , 20, 30, 40, 50);